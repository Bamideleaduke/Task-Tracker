import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task-list ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="icon-flex">
        {task.name}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.email}</p>
    </div>
  );
};

 // {
    //   id: 1,
    //   text: "Doctors Appointment",
    //   day: "Feb %th at 2:30pm",
    //   reminder: false,
    // },
    // {
    //   id: 2,
    //   text: "Lunch Date",
    //   day: "Feb 14th at 2:30pm",
    //   reminder: false,
    // },
    // {
    //   id: 3,
    //   text: "Strategy Meeting",
    //   day: "Dec 20th at 12:30pm",
    //   reminder: false,
    // },
export default Task;
