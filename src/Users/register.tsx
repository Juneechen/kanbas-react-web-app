import { useState } from "react";
import * as client from "./client"; // separate interaction with server into client.ts
import { useNavigate } from "react-router";

export default function RegisterScreen() {
  const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function
  const [user, setUser] = useState({ username: "", password: "" });
  const register = async () => {
    const newUser = await client.registerUser(user);
    console.log(newUser);
    navigate("/Kanbas/Account/profile");
  };

  return (
    <div className="container-fluid">
      <h1>Register</h1>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control mb-2"
        placeholder="Username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="form-control mb-2"
        placeholder="Password"
        type={"password"}
      />
      <button
        onClick={() => {
          register();
        }}
        className="btn btn-primary mb-2"
      >
        Register
      </button>
    </div>
  );
}
