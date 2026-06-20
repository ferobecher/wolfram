import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/context/AdminContext";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(password);
    if (ok) {
      navigate("/");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setError(false);
            setPassword(e.target.value);
          }}
          placeholder="Password"
          autoFocus
          className={`bg-transparent border-b text-white text-center text-lg outline-none py-2 px-4 w-64 placeholder:text-zinc-600 transition-colors ${
            error ? "border-red-500" : "border-zinc-600 focus:border-white"
          }`}
        />
        {error && (
          <p className="text-red-500 text-sm">Incorrect password</p>
        )}
      </form>
    </div>
  );
}
