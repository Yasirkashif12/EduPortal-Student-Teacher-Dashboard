import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Classes from './StudentClass';
import LoadingSpinner from './LoadingSpinner'; 

const GiveMarks = () => {
  const navigate = useNavigate();
  const { type, classId, subjectId, itemId } = useParams();
  const [marks, setMarks] = useState('');
  const [loading, setLoading] = useState(false); 

  const typeMap = {
    quiz: 'quizzes',
    assignment: 'assignments',
  };

  const key = `answer-${type}-${classId}-${subjectId}-${itemId}`;
  let submissions = JSON.parse(localStorage.getItem(key)) || [];

  const selectedClass = Classes?.find((c) => String(c.id) === String(classId));
  const selectedSubject = selectedClass?.subjects?.find(
    (s) => String(s.id) === String(subjectId)
  );
  const selectedItem = selectedSubject?.[typeMap[type]]?.find(
    (data) => String(data.id) === String(itemId)
  );

  const handleSaveMarks = (index) => {
    if (!marks) return;

    if (submissions[index]?.marks !== undefined) {
      alert('⚠ Marks have already been given to this student.');
      return;
    }

    setLoading(true); 
    setTimeout(() => {
      submissions[index] = {
        ...submissions[index],
        marks: Number(marks),
        markedAt: new Date().toISOString(),
        subjectTitle: selectedSubject?.title || selectedSubject?.name || 'Unknown Subject',
        itemTitle: selectedItem?.title || 'Unknown Title',
      };

      localStorage.setItem(key, JSON.stringify(submissions));
      setLoading(false); // hide spinner
      navigate('/teacherhome/markssuccesspage');
    }, 1000); 
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Give Marks</h1>
      <p>
        📚 Subject: {selectedSubject?.title || 'Unknown Subject'}
        <br />
        📄 Item: {selectedItem?.title || 'Unknown Title'}
      </p>

      <div className="mt-6 space-y-4">
        {submissions.length > 0 ? (
          submissions.map((sub, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <p><strong>Student ID:</strong> {sub.id || "Unknown ID"}</p>
              <p><strong>Answer:</strong> {sub.answer || 'No answer provided'}</p>
              {sub.marks !== undefined && (
                <p className="text-green-600 font-bold">
                  ✅ Marks Already Given: {sub.marks}
                </p>
              )}

              <select
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                className="border p-2 mt-2"
                disabled={sub.marks !== undefined || loading}
              >
                <option value="">-- Select Marks --</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>

              {loading ? (
                <div className="inline-block ml-4">
                  <LoadingSpinner />
                </div>
              ) : (
                <button
                  onClick={() => handleSaveMarks(index)}
                  className={`ml-4 px-4 py-2 rounded-lg ${
                    sub.marks !== undefined
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-500 text-white'
                  }`}
                  disabled={sub.marks !== undefined}
                >
                  Save Marks
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No submissions found for this item.</p>
        )}
      </div>
    </div>
  );
};

export default GiveMarks;
