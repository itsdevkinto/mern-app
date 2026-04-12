import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

function App() {
  const { user, setUser, error } = useAuth();

  return (
    <div className="app-container">
      <Header />

      <main>
        {/* This is where your Login or Dashboard pages will render */}
        <Outlet context={{ user, setUser, error }} />
      </main>
    </div>
  );
}

export default App;
