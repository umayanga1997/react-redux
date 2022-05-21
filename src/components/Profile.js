import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user";

function Profile() {
  const usr = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  return (
    <div style={{ color: color }}>
      <p>{usr.name}</p>
      <p>{usr.age}</p>
      <p>{usr.email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Profile;
