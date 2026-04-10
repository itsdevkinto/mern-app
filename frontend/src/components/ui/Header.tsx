import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky w-full top-0 bg-slate-800 text-white py-4 z-10">
      <nav className="flex justify-between items-center px-6">
        <Link to="/" className="font-bold">MERN Auth</Link>
        <div className="flex items-center gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}
