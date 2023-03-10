import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import { Header } from "./component/Header";
import Tasks from "./component/Tasks";

// task state
function App() {
  const [taskItem, setTaskItem] = useState([
   
  ]);
  // task state

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((json) => json.json())
    //   .then((data) => {
    //     console.log(data);
    //     setusers(data);
    //   });

    const getTasks = async () => {
        const serverData = await fetchTasks();

        // console.log(serverData);
        setTaskItem(serverData)

    }
    getTasks()

  }, []);


  // fetch task
  const fetchTasks = async () => {
    const dataLink = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await dataLink.json();

  

  return data

  };
  fetchTasks();



  // add task
  const addTask = async (task) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })

    const data = await res.json();

    setTaskItem([...taskItem, data]);

    console.log("added new task", data);


    // console.log(task);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };



    // setTaskItem([...taskItem, newTask]);
    // console.log("added new task", id);
  };

  // delete task
  const deleteTask = (id) => {
    console.log("delete", id);
    // condition sets that if task.id(target item) is not equal to the index number generated by javascript/ filter while looping
    setTaskItem(taskItem.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTaskItem(
      taskItem.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  // tooggle add button
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <div className="App">
      <div className="tracker">
        <Header
          showAddTask={showAddTask}
          setShowAddTask={setShowAddTask}
          showClose={showAddTask}
        />

        {showAddTask && <AddTask onAdd={addTask} />}
        {taskItem.length > 0 ? (
          <Tasks
            tasks={taskItem}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks To Show"
        )}
      <Footer />
      </div>
      {/* <FetchData  /> */}
    </div>

  );
}

export default App;
