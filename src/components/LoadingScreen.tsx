import React, { useEffect, useState } from "react";

const LoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // After 5 seconds, start fade out animation
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade out animation
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-brand-light via-white to-brand-yellow/20 flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-teal/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Large gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand-teal/10 to-brand-yellow/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with animations */}
        <div className="relative mb-12 animate-scale-in">
          {/* Animated rings around logo */}
          <div className="absolute inset-0 -m-8">
            <div className="w-full h-full border-4 border-brand-teal/30 rounded-full animate-ping" />
          </div>
          <div className="absolute inset-0 -m-12">
            <div
              className="w-full h-full border-2 border-brand-yellow/30 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <div className="absolute inset-0 -m-16">
            <div
              className="w-full h-full border-2 border-brand-teal/20 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Logo */}
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
            <img
              src="https://dermaglareskin.co.za/wp-content/uploads/2023/07/Dermaglare-Skin.png"
              alt="Dermaglare"
              className="h-24 w-auto object-contain animate-pulse-glow"
            />
          </div>

          {/* Sparkle effects */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-yellow rounded-full animate-bounce opacity-75" />
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-teal rounded-full animate-bounce opacity-75"
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        {/* Loading text */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-4 animate-gradient-x">
          Welcome to Dermaglare
        </h1>
        <p className="text-gray-600 text-lg mb-8 animate-fade-in">
          Preparing your skincare journey...
        </p>

        {/* Progress bar */}
        <div className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-brand-teal via-brand-yellow to-brand-teal rounded-full transition-all duration-300 ease-out animate-shimmer"
            style={{
              width: `${progress}%`,
              backgroundSize: "200% 100%",
            }}
          />
        </div>
        <p className="text-brand-teal font-semibold mt-3 text-sm">
          {progress}% Complete
        </p>

        {/* Loading dots animation */}
        <div className="flex gap-2 mt-8">
          <div className="w-3 h-3 bg-brand-teal rounded-full animate-bounce" />
          <div
            className="w-3 h-3 bg-brand-yellow rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          />
          <div
            className="w-3 h-3 bg-brand-dark rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* Fun loading messages */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm italic animate-fade-in">
            {progress < 20 && "✨ Loading your personalized dashboard..."}
            {progress >= 20 && progress < 40 && "🔐 Securing your data..."}
            {progress >= 40 && progress < 60 && "📅 Syncing appointments..."}
            {progress >= 60 && progress < 80 && "📄 Preparing documents..."}
            {progress >= 80 && progress < 100 && "🎉 Almost there..."}
            {progress >= 100 && "✅ Ready!"}
          </p>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-brand-teal/20 rounded-full animate-spin-slow" />
      <div
        className="absolute top-10 right-10 w-12 h-12 border-4 border-brand-yellow/20 rounded-full animate-spin-slow"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default LoadingScreen;
