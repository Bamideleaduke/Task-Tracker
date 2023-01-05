import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task-list ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="icon-flex">
        {task.text}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
