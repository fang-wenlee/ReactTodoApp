import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodo(responseTodo);
      });
  }, [id]);

  console.log(todo);
  const { id: todoid, title, completed } = todo;
  return (
    <>
      <h2>
        {`Todo id: ${todoid} 
     title : ${title} status: 
     ${completed}
     `}
      </h2>
      {}
    </>
  );
};

export default Todo;
