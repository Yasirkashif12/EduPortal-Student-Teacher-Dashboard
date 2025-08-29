import React, { useState } from "react";
import Classes from "./StudentClass";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const StudentSubject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const classInfo = Classes.find((data) => String(data.id) === String(id));

  if (!classInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-700 text-lg font-semibold bg-red-100">
        ❌ Subject does not exist
      </div>
    );
  }

  const handleSubjectClick = (subjectId) => {
    setLoading(true);
    setTimeout(() => {
      navigate(`subjectdetails/${id}/${subjectId}`);
    }, 1500); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
        Subjects in <span className="text-blue-700">{classInfo.name}</span>
      </h1>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <LoadingSpinner />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {classInfo.subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => handleSubjectClick(subject.id)}
            className="block bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {subject.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore lessons, assignments, and quizzes related to{" "}
              <span className="font-medium text-gray-900">{subject.title}</span>.
            </p>

            <span className="inline-block mt-4 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full select-none">
              ID: {subject.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSubject;
