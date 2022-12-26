import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day) {
      Swal.fire({
        icon: "error",
        title: "oops..",
        text: "Fill in your task and date or close the form!",
      });
    } else if (!text && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your task!",
      });
    } else if (text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your day and time!",
      });
    } else {
      onSave({ text, day });
    }
    setDay("");
    setText("");
  };

  const [text, setText] = useState("");

  const [day, setDay] = useState("");
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Task</label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          type="text"
          name="day"
          id="day"
          placeholder="add day & time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};
export default AddTask;
