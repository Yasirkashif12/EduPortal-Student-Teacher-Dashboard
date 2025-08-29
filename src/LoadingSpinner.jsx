import React, { useState, useEffect } from "react";

const LoadingWrapper = ({ children, delay = 2000, loadingText = "Loading..." }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 min-h-[100px]">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-indigo-600 font-semibold animate-pulse">{loadingText}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
