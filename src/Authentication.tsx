import { useState } from "react";
import { supabase } from "./superbase";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";


function Authentication() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");


    async function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    navigate("/feed");
  }


  async function handleGoogleLogin() {
    setGoogleLoading(true);
    setError("");

    const { error } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });

    if (error) {
      setError(error.message);
      setGoogleLoading(false);
    }
  }


  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <img
          src="/RateCipes.png"
          alt="Your Company"
          className="mx-auto h-10 w-auto dark:hidden"
        />

        <img
          src="/RateCipes.png"
          alt="Your Company"
          className="mx-auto h-10 w-auto not-dark:hidden"
        />

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
          Sign in to your account
        </h2>

      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        {error && (
          <div className="mb-6 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
            >
              Email address
            </label>

            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>

          {/* Password */}

          <div>

            <div className="flex items-center justify-between">

              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                Forgot password?
              </Link>

            </div>

            <div className="mt-2">

              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />

            </div>
          </div>

          {/* Sign in */}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>
        
          {/* Divider */}

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />

          <span className="text-xs text-gray-500">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
        </div>

        {/* Google */}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading || googleLoading}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          {googleLoading ? (
            "Connecting to Google..."
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.72-.06-1.41-.18-2.07H12v3.92h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.24Z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.75Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.54 13.83A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.83V7.64H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.36l3.24-2.53Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.14c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.83 3.23 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.7 5.39l3.24 2.53C7.31 7.86 9.46 6.14 12 6.14Z"
                />
              </svg>

              Continue with Google
            </>
          )}
        </button>

        {/* Signup */}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
          </Link>
      </div>
    </div>
  );
}

export default Authentication;