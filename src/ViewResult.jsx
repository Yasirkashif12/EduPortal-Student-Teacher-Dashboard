import React from 'react';
import { toast } from 'react-toastify';
import { auth } from './firebase';

const ViewResult = () => {
  const user = auth.currentUser;
  const studentUid = user?.uid || localStorage.getItem("studentUid");

  const safeparse = (key) => {
    try {
      let raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      toast.error(error.message);
      return null;
    }
  };

  const answers = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key && key.startsWith(`answer-`)) {
      let data = safeparse(key);
      if (Array.isArray(data)) {
        answers.push(...data);
      }
    }
  }

  let results = answers
    .filter(info => String(info.id) === String(studentUid))
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-6">
      <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-8">
        📊 My Results
      </h1>

      {results.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No results found yet.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {results.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-indigo-600">{value.subjectTitle}</h2>
                {value.marks !== undefined && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full text-sm">
                    Marks: {value.marks}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600"><strong>Student ID:</strong> {value.id}</p>
              <p className="text-sm text-gray-600"><strong>Name:</strong> {value.name}</p>
              <p className="text-sm text-gray-600"><strong>Item:</strong> {value.itemTitle}</p>
              <p className="text-sm text-gray-600"><strong>Subject ID:</strong> {value.subjectId}</p>

              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-800"><strong>My Answer:</strong> {value.answer}</p>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Submitted at: {new Date(value.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewResult;
