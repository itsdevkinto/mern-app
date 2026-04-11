import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/AuthContext";

function App() {
  const { user, setUser, isLoading, error } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-800">
        <p className="text-xl text-white">Loading...</p>
      </div>
    );
  }

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
