import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from './firebase';
import Classes from './StudentClass';
import LoadingSpinner from './LoadingSpinner';

const SubmitAnswer = () => {
  const navigate = useNavigate();
  const { type, classId, subjectId, itemId } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const typeMap = {
    quiz: "quizzes",
    assignment: "assignments"
  };

  const selectedClass = Classes?.find(c => String(c.id) === String(classId));
  const selectedSubject = selectedClass.subjects?.find(s => String(s.id) === String(subjectId));
  const selectedItem = selectedSubject?.[typeMap[type]]?.find(
    data => String(data.id) === String(itemId)
  );

  const onsubmit = (data) => {
    try {
      setLoading(true); 

      const key = `answer-${type}-${classId}-${subjectId}-${selectedItem.id}`;
      const user = auth.currentUser;
      const studentUid = user?.uid || localStorage.getItem("studentUid");

      const studentName =
        user?.displayName ||
        localStorage.getItem("studentName") ||
        "Unknown Student";

      const answerData = {
        id: studentUid, 
        name: studentName,
        answer: data.answer,
        submittedAt: new Date().toISOString(),
        subjectTitle: selectedSubject?.title || "Unknown Subject",
        subjectId: selectedSubject?.id || "Unknown ID",
        itemTitle: selectedItem?.title || "Unknown Title"
      };

      let existingAnswers = JSON.parse(localStorage.getItem(key)) || [];

      if (existingAnswers.some(entry => entry.id === selectedSubject?.id)) {
        alert("You have already submitted an answer for this.");
        setLoading(false);
        return;
      }

      existingAnswers.push(answerData);
      localStorage.setItem(key, JSON.stringify(existingAnswers));

      toast.success("✅ Answer Submitted Successfully");

      setTimeout(() => {
        navigate('/studentsuccesspage');
      }, 2000);

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
          ✍ Submit Your {type === 'quiz' ? 'Quiz' : 'Assignment'} Answer
        </h1>

        <p className="text-center text-lg text-gray-600 mb-6">
          📚 Subject: <span className="font-semibold text-indigo-600">{selectedSubject?.title || 'Unknown Subject'}</span>
        </p>

        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Your Answer:
              </label>
              <textarea
                {...register("answer", {
                  required: "Enter The Answer",
                  minLength: {
                    value: 2,
                    message: "Please Enter At Least Two Characters"
                  }
                })}
                placeholder="Type your answer here..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 min-h-[150px] resize-none text-gray-800"
              />
              {errors.answer && (
                <p className="text-red-500 text-sm mt-2">{errors.answer.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transform hover:scale-[1.02] transition-all duration-200"
            >
              🚀 Submit Answer
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubmitAnswer;
