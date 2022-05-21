import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  // Using dispatch feature from redux
  const dispatch = useDispatch();
  // JSX
  return (
    <div>
      {/* Dispatching login method */}
      <button
        onClick={() =>
          dispatch(
            login({ name: "umayenga", age: "30", email: "umayanga@gmail.com" })
          )
        }
      >
        Login
      </button>
    </div>
  );
}

export default Login;
