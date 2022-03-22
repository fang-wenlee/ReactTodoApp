import React from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  return <h2>A Todo {id}</h2>;
};

export default Todo;
