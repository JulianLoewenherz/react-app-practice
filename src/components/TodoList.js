// TodoList.js

import React, { useState } from 'react';
import './TodoList.css';  // Import the CSS file

const TodoList = () => {
    // Array state to hold the list of tasks
    const [itemsArr, setItemsArr] = useState([]);
    // Input field state to track the current task being typed
    const [inputValue, setInputValue] = useState('');

    // Function to handle adding a new task to the list
    const handleAddTask = () => {
        if (inputValue.trim() !== '') {  // Check if input is not empty
            setItemsArr([...itemsArr, inputValue]); // Add the new task to the list
            setInputValue('');  // Clear the input field
        }
    };

    return (
        <div className="todo-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="todo-input"
            placeholder="Enter a new task"
          />
          <button onClick={handleAddTask} className="todo-button">Add Task</button>
          
          <ul className="todo-list">
            {itemsArr.map((item, index) => (
              <li key={index} className="todo-list-item">{item}</li>
            ))}
          </ul>
        </div>
      );
};

export default TodoList;
