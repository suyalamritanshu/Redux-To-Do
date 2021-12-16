import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) =>{
    return{
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (obj) => dispatch(addTodos(obj))
    }
}

const Todo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      ></input>
      <button className="add-btn" onClick={() => props.addTodo({
          //we will write object/todo
          id: Math.floor(Math.random()*1000),
          item: todo,
          completed: false,
      })}>Add</button>
    </div>
  );
};

//We can connect this component with redux store using connect method
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
