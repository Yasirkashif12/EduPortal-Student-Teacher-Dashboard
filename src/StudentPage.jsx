import React, { useState } from "react";
import Classes from "./StudentClass";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const StudentPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const filteredData = Classes.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  const showpage = 3;
  const endIndex = page * showpage;
  const startIndex = endIndex - showpage;
  const currentpage = filteredData.slice(startIndex, endIndex);

  const totalpages = Math.ceil(filteredData.length / showpage);
  const pageNumber = Array.from({ length: totalpages }, (_, i) => i + 1);

  const handleClassClick = (id) => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/studentsubject/${id}`);
    }, 1500); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col items-center py-10 pt-20">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-tight drop-shadow-sm">
        📚 Your Classes
      </h1>

      <div className="mb-10 w-full flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search class..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-80 px-5 py-3 rounded-full bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-700"
        />
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <LoadingSpinner />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-8">
        {currentpage.map((app) => (
          <div
            key={app.id}
            onClick={() => handleClassClick(app.id)}
            className="group"
          >
            <div
              className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center justify-center cursor-pointer
                hover:shadow-2xl hover:scale-105 hover:border-blue-300 transition-all duration-300"
            >
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                #{app.id}
              </span>

              <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>

              <h2 className="text-2xl font-bold text-blue-700 tracking-tight mb-2">
                {app.name}
              </h2>

              <p className="text-gray-500 text-sm text-center">
                Explore assignments, quizzes, and resources for {app.name}.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-full shadow-md transition-all ${
            page === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:scale-105"
          }`}
        >
          Prev
        </button>

        {pageNumber.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-10 h-10 rounded-full font-semibold shadow-md transition-all ${
              page === num
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg scale-110"
                : "bg-white border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={page === totalpages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-full shadow-md transition-all ${
            page === totalpages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:scale-105"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentPage;
