// src/pages/ErrorPage.tsx
import { useRouteError, Link } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex text-white flex-col items-center justify-center h-screen bg-slate-800">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="my-4 text-lg text-slate-400">Sorry, an unexpected error has occurred.</p>
      <Link to="/" className="text-blue-500 underline">Go back home</Link>
    </div>
  );
}
