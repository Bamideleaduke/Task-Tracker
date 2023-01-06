import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((json) => json.json())
    //   .then((data) => {
    //     console.log(data);
    //     setusers(data);
    //   });

    

    const getTasks = async () => {
      const serverData = await fetchTasks();

      console.log(serverData);
      setusers(serverData);
    };
    getTasks();
  }, []);

  // fetch task
  const fetchTasks = async () => {
    const dataLink = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await dataLink.json();

    return data;
    // setusers(data)
  };
  fetchTasks();

  return (
    <div>
      {users.map((user, id) => {
        console.log(user);
        const { name, username } = user;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{username}</h2>
          </div>
        );
      })}
    </div>
  );
};
