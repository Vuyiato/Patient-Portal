import React, { useState, FC } from "react";
import { useAuth } from "../contexts/AuthContext";
import { loginWithGoogle, resetPassword } from "../services/auth-service";
import {
  IconLoader2,
  IconAlertCircle,
  IconLock,
  IconMail,
  IconUser,
  IconCheck,
  IconArrowRight,
  IconCheckCircle,
} from "../components/Icons";
import Button from "../components/Button";
import Input from "../components/Input";
import {
  validatePassword,
  validatePasswordMatch,
} from "../services/auth-service";

// --- ANIMATED PARTICLES (Background Effect) ---
const AnimatedParticles: FC = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
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
    </div>
  );
};

// --- GOOGLE ICON COMPONENT ---
const IconGoogle: FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const LoginPage: FC = () => {
  const { login, signup, showToast } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        showToast("Welcome back! 🎉", "success");
      } else {
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
          setErrors({ password: passwordValidation.error });
          setIsLoading(false);
          return;
        }

        const matchValidation = validatePasswordMatch(
          password,
          confirmPassword
        );
        if (!matchValidation.isValid) {
          setErrors({ confirmPassword: matchValidation.error });
          setIsLoading(false);
          return;
        }

        await signup(email, password, displayName);
        showToast("Account created successfully! 🎊", "success");
      }
    } catch (error: any) {
      console.error("Login/Signup Error:", error);
      setErrors({ general: error.message || "Authentication failed" });
      showToast(error.message || "Authentication failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      showToast("Connecting to Google... 🔐", "info");
      await loginWithGoogle();
      showToast("Google login successful! ✨", "success");
    } catch (error: any) {
      console.error("Google Login Error:", error);
      showToast(error.message || "Google login failed", "error");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      showToast("Please enter your email address", "error");
      return;
    }

    try {
      await resetPassword(email);
      showToast("Password reset email sent! 📧", "success");
    } catch (error: any) {
      showToast(error.message || "Failed to send reset email", "error");
    }
  };

  const toggleForm = () => {
    setIsFlipped(!isFlipped);
    setErrors({});
    setTimeout(() => {
      setIsLogin(!isLogin);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-yellow/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedParticles />

      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-brand-teal/5 to-brand-yellow/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Main Card with 3D Flip Effect */}
      <div
        className="w-full max-w-md relative z-10"
        style={{ perspective: "1000px" }}
      >
        <div
          className={`relative w-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass Morphism Card */}
          <div className="relative backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 border border-white/50 animate-scale-in">
            {/* Animated Glow Border */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-teal/20 via-brand-yellow/20 to-brand-teal/20 animate-shimmer"
              style={{
                backgroundSize: "200% 100%",
                filter: "blur(20px)",
                zIndex: -1,
              }}
            />

            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6 animate-slide-up">
                {/* Logo with animated effects */}
                <div className="relative p-4 bg-white rounded-3xl shadow-2xl animate-pulse-glow">
                  <img
                    src="https://dermaglareskin.co.za/wp-content/uploads/2023/07/Dermaglare-Skin.png"
                    alt="Dermaglare Skin"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                {/* Floating rings around logo */}
                <div className="absolute inset-0 border-4 border-brand-yellow/30 rounded-3xl animate-ping" />
                <div
                  className="absolute inset-0 border-2 border-brand-teal/20 rounded-3xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              <h1
                className="text-4xl font-bold text-brand-dark mb-2 animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                {isLogin ? "Welcome Back!" : "Join Dermaglare"}
              </h1>
              <p
                className="text-gray-600 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                {isLogin
                  ? "Continue your skincare journey"
                  : "Begin your transformation today"}
              </p>
            </div>

            {/* General Error Message Display */}
            {errors.general && (
              <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg animate-slide-up">
                <div className="flex items-center gap-2 text-red-800">
                  <IconAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{errors.general}</p>
                </div>
              </div>
            )}

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="animate-slide-up">
                  <Input
                    id="displayName"
                    label="Full Name"
                    placeholder="Jane Doe"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    icon={<IconUser />}
                  />
                </div>
              )}

              <div
                className="animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<IconMail />}
                />
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<IconLock />}
                  error={errors.password}
                  required
                />
              </div>

              {/* Confirm Password Field (Only for Signup) */}
              {!isLogin && (
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "250ms" }}
                >
                  <Input
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    icon={<IconLock />}
                    error={errors.confirmPassword}
                    required
                  />
                </div>
              )}

              {/* Password Requirements (Only for Signup) */}
              {!isLogin && (
                <div
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 animate-slide-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <p className="text-sm font-medium text-blue-900 mb-2">
                    Password must contain:
                  </p>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      One uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      One lowercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3 h-3" />
                      One number
                    </li>
                  </ul>
                </div>
              )}

              {/* Remember & Forgot Password */}
              {isLogin && (
                <div
                  className="flex items-center justify-between text-sm animate-slide-up"
                  style={{ animationDelay: "250ms" }}
                >
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-brand-teal text-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all group-hover:scale-110"
                    />
                    <span className="text-gray-600 group-hover:text-brand-teal transition-colors">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-brand-teal hover:text-brand-dark font-medium hover:underline transition-all hover:scale-105"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button with Gradient */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "300ms" }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full relative overflow-hidden group"
                  disabled={isLoading}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-teal to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"
                    style={{ backgroundSize: "200% 100%" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <IconLoader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {isLogin ? "Log In" : "Create Account"}
                        <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>

            {/* Divider */}
            <div
              className="relative my-6 animate-slide-up"
              style={{ animationDelay: "350ms" }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/70 text-gray-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign In Button */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-brand-teal hover:shadow-lg transition-all duration-300 group hover:scale-105 active:scale-95"
              >
                <IconGoogle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-700 group-hover:text-brand-teal transition-colors">
                  Continue with Google
                </span>
              </button>
            </div>

            {/* Toggle Login/Signup */}
            <div
              className="mt-6 text-center animate-slide-up"
              style={{ animationDelay: "450ms" }}
            >
              <p className="text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={toggleForm}
                  className="ml-2 text-brand-teal font-semibold hover:text-brand-dark transition-all hover:scale-105 inline-block relative group"
                >
                  {isLogin ? "Sign Up" : "Log In"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal group-hover:w-full transition-all duration-300" />
                </button>
              </p>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 animate-slide-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer">
                <IconLock className="w-3 h-3" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer">
                <IconCheckCircle className="w-3 h-3" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer">
                <IconCheckCircle className="w-3 h-3" />
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Extra Flair */}
      <div className="absolute bottom-10 left-10 animate-bounce-subtle opacity-50">
        <IconCheckCircle className="w-12 h-12 text-brand-teal" />
      </div>
      <div
        className="absolute top-10 right-10 animate-float opacity-50"
        style={{ animationDelay: "1s" }}
      >
        <IconLock className="w-10 h-10 text-brand-yellow" />
      </div>
    </div>
  );
};

export default LoginPage;
