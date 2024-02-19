import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [taskName, setTaskName] = useState('');

  function add(taskName) {
    setTodoList([...todoList, taskName])
    setTaskName('')
  }

  function remove(id) {
    const newList = todoList.filter((item, index) => id !== index);
    setTodoList(newList)
  }

  return (
    <div className='App'>
      <div className='title'>Todo List</div>
      <div className='container'>
        <div className='listinput'>
          <div id='att'>Task Name :</div>
          <input type='text' id='name' placeholder='Add your task here.' value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
          <button className='btn' disabled={!taskName.length} onClick={() => add(taskName)}>Add Task</button>
        </div>
        <div className='TodoList'>
          {todoList.map((task, index) => {
            return (<div className='listitem' key={index}>
              <div className='taskname'>{index+1}. {task}</div>
              <button className='btn' onClick={() => remove(index)}>Remove</button>
            </div>)
          })}
        </div>
      </div>
    </div>

  );
}


export default App;
