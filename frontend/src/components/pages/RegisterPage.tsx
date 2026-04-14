import axios from "axios";
import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { user, setUser, error, setError } = useAuth();
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axios.post("/api/user/register", formData);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      console.log(response.data.user);
      navigate("/");
    } catch (error: any) {
      setError(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto flex w-3/4 max-w-md flex-col items-center justify-center rounded-xl bg-white p-8 drop-shadow-2xl">
        <h1 className="mb-4 text-3xl font-bold">Register</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-center gap-4 *:w-full"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="w-full rounded-md border border-gray-500/55 p-3"
              placeholder="Enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-md border border-gray-500/55 p-3"
              placeholder="Enter your email"
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
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
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <button
            className="w-full cursor-pointer rounded-md bg-accent p-3 font-medium text-white hover:bg-blue-600"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
