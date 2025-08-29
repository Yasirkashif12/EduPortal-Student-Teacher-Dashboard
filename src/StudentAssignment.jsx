import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Classes from "./StudentClass";
import LoadingSpinner from "./LoadingSpinner";

const StudentAssignment = () => {
  const { classId, subjectId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [targetLink, setTargetLink] = useState(""); 

  const classInfo = Classes.find(c => c.id == classId);
  if (!classInfo) return <h2>No Class Found</h2>;

  const subjectInfo = classInfo.subjects.find(s => s.id == subjectId);
  if (!subjectInfo) return <h2>No Subject Found</h2>;

  const handleClick = (linkName, path) => {
    setTargetLink(linkName);
    setLoading(true);

    setTimeout(() => {
      navigate(path);
    }, 2000); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        {subjectInfo.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button
          onClick={() =>
            handleClick(
              "assignments",
              `/todayassignments/${classId}/${subjectId}`
            )
          }
          className="relative bg-blue-600 text-white py-6 px-10 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
          {loading && targetLink === "assignments" ? (
            <LoadingSpinner />
          ) : (
            "📄 Today's Assignments"
          )}
        </button>

        <button
          onClick={() =>
            handleClick("quizzes", `/todayquizzes/${classId}/${subjectId}`)
          }
          className="relative bg-green-600 text-white py-6 px-10 rounded-lg shadow-lg hover:bg-green-700 transition flex items-center justify-center"
        >
          {loading && targetLink === "quizzes" ? (
            <LoadingSpinner />
          ) : (
            "📝 Today's Quizzes"
          )}
        </button>
      </div>
    </div>
  );
};

export default StudentAssignment;
