import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: "1", email: "umang@example.com", password: "password1" },
  { id: "2", email: "gaurav@example.com", password: "password2" },
  { id: "3", email: "shantanu@example.com", password: "password3" },
  { id: "4", email: "anurag@example.com", password: "password4" },
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      navigate(`/userhome/${user.id}`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="p-4">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block py-2 px-3 mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block py-2 px-3 mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 mt-4 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
