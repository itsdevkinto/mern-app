import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

// This component wraps "Logged-out only" pages
export const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (user) {
    // If logged in, warp them to Home
    return <Navigate to="/" replace />;
  }

  return children;
};
