import axios from "axios";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { AuthContextType } from "@/App"; 

export default function LoginPage() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const { user, setUser } = useOutletContext<AuthContextType>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axios.post("api/user/login", formData);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (error) {}
  }

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto flex w-3/4 max-w-md flex-col items-center justify-center rounded-xl bg-white p-8 drop-shadow-2xl">
        <h1 className="mb-4 text-3xl font-bold">Login</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form className="flex w-full flex-col justify-center gap-4 *:w-full">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-md border border-gray-500/55 p-3"
              placeholder="Enter your email"
              type="text"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="w-full rounded-md border border-gray-500/55 p-3"
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <button
            className="w-full cursor-pointer rounded-md bg-accent p-3 font-medium text-white hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
