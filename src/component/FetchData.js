import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((json) => json.json())
      .then((data) => {
        console.log(data);
        setusers(data);
      });
  });
  return (
    <div>
      {users.map((user, id) => {
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
