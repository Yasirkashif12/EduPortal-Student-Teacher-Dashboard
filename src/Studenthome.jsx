import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const StudentHome = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/studentpage");
    }, 2000); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 py-8 pt-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Your Learning Dashboard
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Stay on track with your classes, assignments, and quizzes — all in one
          place.
        </p>

        {loading ? (
          <div className="mt-6 flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-indigo-700 transition"
          >
            View Classes
          </motion.button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "Daily Assignments",
            desc: "Get your assignments organized and submitted easily.",
            icon: "📚",
          },
          {
            title: "Quizzes & Tests",
            desc: "Take quizzes directly from your dashboard.",
            icon: "📝",
          },
          {
            title: "Progress Tracking",
            desc: "See your performance improve over time.",
            icon: "📊",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 text-center"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StudentHome;
