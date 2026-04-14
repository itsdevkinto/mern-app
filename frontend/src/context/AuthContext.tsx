import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import LoadinScreen from "@/components/pages/LoadingScreen";
import { set } from "mongoose";

const AuthContext = createContext<AuthContextType | null>(null);

interface UserData {
  name: string;
  email: string;
}
export interface AuthContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  isLoading: boolean;
  error: string | null;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<AuthContextType["error"]>(null);
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [isLoading, setIsLoading] =
    useState<AuthContextType["isLoading"]>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const timer = new Promise((resolve) => setTimeout(resolve, 800));
      const token = localStorage.getItem("token");

      try {
        if (token) {
          const response = await axios.get("api/user/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data.user);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, error }}>
      {isLoading ? <LoadinScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
