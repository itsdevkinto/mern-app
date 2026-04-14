import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "@/components/pages/LoadingScreen";

const AuthContext = createContext<AuthContextType | null>(null);

interface UserData {
  name: string;
  email: string;
}
interface AuthContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  isLoading: boolean;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<AuthContextType["error"]>(null);
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [isLoading, setIsLoading] =
    useState<AuthContextType["isLoading"]>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const timer: Promise<void> = new Promise((resolve) =>
        setTimeout(resolve, 800),
      );
      const token = localStorage.getItem("token");

      // STOP HERE if there is no token
      if (!token) {
        await timer;
        setIsLoading(false);
        return;
      }

      try {
        const apiCall = axios.get<{ user: UserData }>("/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const [response] = await Promise.all([apiCall, timer]);

        setUser(response.data.user);
        setError(null);
      } catch (err: any) {
        localStorage.removeItem("token");
        setError(err.response?.data?.message || "Session expired");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, error, setError }}>
      {isLoading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
