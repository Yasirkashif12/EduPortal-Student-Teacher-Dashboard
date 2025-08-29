import React, { useState, useEffect } from "react";
import Classes from "./StudentClass";
import { Link } from "react-router-dom"; 

const ViewSubmission = () => {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [filterType, setFilterType] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const safeParse = (key) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    if (!selectedGrade) {
      setSubmissions([]);
      return;
    }

    let subs = [];
    const typeMap = { quiz: "quizzes", assignment: "assignments" };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith("answer-")) {
        const parts = key.split("-");
        const type = parts[1];
        const classId = parts[2];
        const subjectId = parts[3];
        const itemId = parts[4];
        const data = safeParse(key);

        if (classId === selectedGrade && Array.isArray(data)) {
          const selectedClass = Classes.find(
            (c) => String(c.id) === classId
          );
          const selectedSubject = selectedClass?.subjects.find(
            (s) => String(s.id) === subjectId
          );
          const selectedItem =
            selectedSubject?.[typeMap[type]]?.find(
              (itm) => String(itm.id) === String(itemId)
            );

          subs.push({
            type,
            subjectTitle:
              selectedSubject?.title ||
              selectedSubject?.name ||
              "Unknown Subject",
            itemTitle: selectedItem?.title || "Unknown Title",
            submissions: data,
            itemId,
            subjectId,
            classId
          });
        }
      }
    }

    if (filterType) {
      subs = subs.filter((item) => item.type === filterType);
    }

    setSubmissions(subs);
  }, [selectedGrade, filterType]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
            📚 View Student Submissions
          </h1>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              Select Grade:
            </label>
            <select
              onChange={(e) => setSelectedGrade(e.target.value)}
              value={selectedGrade}
              className="w-full p-3 border rounded-lg focus:ring-4 focus:ring-indigo-300"
            >
              <option value="">-- Choose Grade --</option>
              {Classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          {selectedGrade && (
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Filter by Type:
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setFilterType("")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filterType === ""
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType("quiz")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filterType === "quiz"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Quizzes
                </button>
                <button
                  onClick={() => setFilterType("assignment")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filterType === "assignment"
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Assignments
                </button>
              </div>
            </div>
          )}

          {submissions.length > 0 ? (
            submissions.map((item, idx) => (
              <div
                key={idx}
                className="mb-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 border rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-bold text-indigo-600 mb-1">
                  {item.type.toUpperCase()}
                </h2>
                <p className="text-gray-700 mb-3">
                  📘 <span className="font-medium">Subject:</span>{" "}
                  {item.subjectTitle}
                  <br />
                  📄 <span className="font-medium">Title:</span> {item.itemTitle}
                </p>

                {item.submissions.map((sub, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow mb-3 border"
                  >
                    <p className="font-semibold text-gray-800">
                      👤 Student:{" "}
                      <span className="text-indigo-500">{sub.name}</span>
                    </p>
                    <p className="text-gray-700 mt-1">
                      📝 <span className="font-medium">Answer:</span>{" "}
                      {sub.answer}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      ⏱ Submitted:{" "}
                      {sub.submittedAt
                        ? new Date(sub.submittedAt).toLocaleString()
                        : "Unknown Time"}
                    </p>
                  </div>
                ))}

<Link
  to={`/teacherhome/givemarks/${item.type}/${item.classId}/${item.subjectId}/${item.itemId}`}
  className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
>
  Give Marks
</Link>
              </div>
            ))
          ) : selectedGrade ? (
            <p className="text-gray-500 italic">
              No submissions found for this selection.
            </p>
          ) : (
            <p className="text-gray-500 italic">
              Select a grade to view submissions.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewSubmission;
