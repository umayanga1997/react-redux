import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user";

function Profile() {
  // Calling useSelector feature from redux to identify declired states
  const usr = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.color.value);
  // using dispatch feature from redux
  const dispatch = useDispatch();
  return (
    <div style={{ color: color }}>
      <p>{usr.name}</p>
      <p>{usr.age}</p>
      <p>{usr.email}</p>
      {/* Dispatching logout method */}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Profile;
