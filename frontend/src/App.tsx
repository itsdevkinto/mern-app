import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
}

export interface AuthContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}

function App() {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const res = await axios.get("api/user/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data.user);
        } catch (error) {
          setError("Failed to fetch user data");
          localStorage.removeItem("token");
          console.error(error);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="app-container">
      <Header />

      <main>
        {/* This is where your Login or Dashboard pages will render */}
        <Outlet context={{ user, setUser } satisfies AuthContextType} />
      </main>
    </div>
  );
}

export default App;
