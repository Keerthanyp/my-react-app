import React from "react";
import "../index.css";
import Button from "./Button";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="header">
      <h2>Task Manager App</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
