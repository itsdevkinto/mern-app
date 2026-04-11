import { useAuth } from "@/AuthContext";
import { Link, useOutletContext, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);

    navigate("/");
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-slate-800 py-4 text-white">
      <nav className="flex items-center justify-between px-6">
        <Link to="/" className="font-bold">
          MERN Auth
        </Link>
        {user ? (
          <button onClick={handleLogout} className="rounded bg-red-500 p-4 py-2 text-white hover:bg-red-600">
            Logout
          </button>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
