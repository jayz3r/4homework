import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../store/todosReducer";

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    if (newTodo.trim() !== "") {
      dispatch(
        addTodo({
          id: new Date(),
          text: newTodo,
        })
      );
      setNewTodo("");
    }
  };

  const removePost = (id) =>{
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <h4>TodoList</h4>
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button onClick={onButtonClick}>Добавить</button>
      <ul>
        {todos.map((t) => (
          <li>
            <button onClick={() => removePost(t.id)}>x</button>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
