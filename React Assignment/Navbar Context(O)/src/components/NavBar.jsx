import React, { useContext } from "react";
import UserContext from "./contexts.jsx/UserContext";

const style = {
  background: "purple",
  display: "flex",
  padding: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "white",
  fontWeight: "bold"
};

const NavBar = () => {
  const { name } = useContext(UserContext);

  return <div style={style}>Hi {name}!</div>;
};

export default NavBar