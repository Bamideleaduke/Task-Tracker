import Button from "./Button";

export const Header = ({ showClose, showAddTask, setShowAddTask }) => {
  const showForm = () => {
    setShowAddTask(!showAddTask)
  }
  return (
    <header>
      <h2>App Tracker</h2>
      <Button 
      text={showClose ? "Close" : "Add"}
        color={showClose ? "btn closeBtn" : "btn addBtn"}
       onClick={() => showForm()}
      />
    </header>
  );
};
