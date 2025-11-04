import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  loginWithEmail,
  loginWithGoogle,
  signupWithEmail,
} from "../services/auth-service";
import { DermагlareLogo, IconLoader2 } from "../components/Icons";
import Button from "../components/Button";
import Input from "../components/Input";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await loginWithEmail(email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const displayName = `${firstName} ${lastName}`;
      await signupWithEmail(email, password, displayName);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-brand-light items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <DermагlareLogo className="h-16 inline-block" />
          <h1 className="text-3xl font-bold text-brand-dark mt-4">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-600">Access your patient portal.</p>
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={isSignUp ? handleEmailSignUp : handleEmailLogin}>
          <div className="space-y-4">
            {isSignUp && (
              <>
                <Input
                  id="firstName"
                  label="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <Input
                  id="lastName"
                  label="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </>
            )}
            <Input
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-6">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <IconLoader2 className="animate-spin" />
              ) : isSignUp ? (
                "Sign Up"
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-brand-teal hover:underline"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-brand-light text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div>
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {/* You can add a Google icon here */}
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
