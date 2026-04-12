import type { AuthContextType } from "@/App";
import { useOutletContext } from "react-router-dom";

export default function Hero() {
  const { error, user } = useOutletContext<AuthContextType>();
  return (
    <div className="-mt-15 flex h-screen items-center justify-center">
      <div className="container mx-auto flex w-3/4 max-w-md flex-col items-center justify-center rounded-xl bg-white p-8 text-center drop-shadow-2xl">
        {error && <p className="mb-4 text-red-500">{error}</p>}
        {user ? (
          <>
            <h1 className="mb-4 text-3xl font-bold">Welcome, {user.name}</h1>
            <p className="mb-4 text-lg">Email: {user.email}</p>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-3xl font-bold">Welcome</h1>
            <p className="mb-4 text-lg">Please login or register</p>
            <div className="flex w-full flex-col justify-center gap-2 *:w-full">
              <a
                href="/login"
                className="mr-4 flex items-center justify-center rounded bg-accent px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                Login
              </a>
              <a
                href="/register"
                className="flex items-center justify-center rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300"
              >
                Register
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
