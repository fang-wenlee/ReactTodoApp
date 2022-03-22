import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = ({ todo }) => {
  const { id: todoid, title, completed } = todo;
  let history = useHistory();

  return (
    <div
      onClick={() => history.push(`/todo/${todoid}`)}
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "15px",
        width: "200px"
      }}
    >
      <h2>{`id: ${todoid} => ${title} `}</h2>
      <h3>{`Is completed : ${completed}`}</h3>
    </div>
  );
};
export default TodoCard;
