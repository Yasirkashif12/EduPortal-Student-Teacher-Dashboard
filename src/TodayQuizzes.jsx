import React, { useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import Classes from "./StudentClass";
import LoadingSpinner from "./LoadingSpinner";

const TodayQuizzes = () => {
  const { classId, subjectId } = useParams();
  const classIdNum = Number(classId);
  const subjectIdNum = Number(subjectId);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const classInfo = Classes.find((c) => c.id === classIdNum);
  if (!classInfo)
    return (
      <h2 className="text-center text-red-500 font-bold mt-10">🚫 No Class Found</h2>
    );

  const subjectInfo = classInfo.subjects.find((s) => s.id === subjectIdNum);
  if (!subjectInfo)
    return (
      <h2 className="text-center text-red-500 font-bold mt-10">🚫 No Subject Found</h2>
    );

  const quizzes = Array.isArray(subjectInfo.quizzes) ? subjectInfo.quizzes : [];

  if (quizzes.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold">No quizzes available</h3>
          <p className="text-sm text-gray-500 mt-2">Check back later.</p>
        </div>
      </div>
    );

  const dayIndex = new Date().getDay();
  const quizzesIndex = dayIndex % quizzes.length;
  const todayquizzes = quizzes[quizzesIndex];

  const handleDoQuiz = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(
        `/submitanswer/quiz/${classId}/${subjectId}/${todayquizzes.id}`
      );
    }, 2000); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-indigo-700">
          📚 Today's Quiz
          <span className="block text-lg font-medium text-gray-500">
            {subjectInfo.title}
          </span>
        </h1>

        <div className="grid gap-6">
          <div
            key={todayquizzes.id}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px] rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                📄 {todayquizzes.title}
              </h3>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Due Date:</span>{" "}
                {todayquizzes.duedate}
              </p>
              <p className="mt-1">
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    (todayquizzes.status || "").toLowerCase() === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {todayquizzes.status}
                </span>
              </p>

              {loading ? (
                <div className="mt-6 flex justify-center">
                  <LoadingSpinner />
                </div>
              ) : (
                <button
                  onClick={handleDoQuiz}
                  className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                >
                  Do Quiz
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TodayQuizzes;
