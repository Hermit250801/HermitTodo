import globalStyle from './assets/css/global.module.css'
import Header from './Compnents/Header'
import TodoList from './Compnents/TodoList';
import { useState, useEffect } from 'react'
import Footer from "./Compnents/Footer"
function App() {
  document.title = "Hermit Todo App"
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn Javascript",
      completed: false
    },
    {
      id: 2,
      text: "Learn React",
      completed: false
    },
    {
      id: 3,
      text: "Build a React App",
      completed: false
    }
  ])

  const [inputTodo, setInputTodo] = useState('');
  const [selected, setSelected] = useState(false);
  const [newTodos, setNewTodos] = useState(todos);
  const [allSelected, setAllSelected] = useState(true);
  const [activeSelected, setActiveSelected] = useState(false);
  const [completedSelected, setCompletedSelected] = useState(false);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    saveLocalTodos();
  }, [newTodos])

  const fillterAll = (e) => {
    setAllSelected(true);
    setActiveSelected(false);
    setCompletedSelected(false);
    setNewTodos(todos); 
  }

  const fillterCompleted = (e) => {
    setAllSelected(false);
    setActiveSelected(false);
    setCompletedSelected(true);
    const todosCompleted = todos.filter(todo => todo.completed === true);
    setNewTodos(todosCompleted);
  }

  const fillterActive = (e) => {
    setAllSelected(false);
    setActiveSelected(true);
    setCompletedSelected(false);
    const todosActive = todos.filter(todo => todo.completed === false);
    setNewTodos(todosActive);
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      setNewTodos(todosLocal);
      setTodos(todosLocal);
    }
  }


  return (
    <div className={globalStyle.App}>
      <div className={globalStyle.container}>
        <Header newTodos={newTodos} setNewTodos={setNewTodos}  todos={todos} setTodos={setTodos} inputTodo={inputTodo} setInputTodo={setInputTodo} name="Add New" />
        <TodoList  newTodos={newTodos} setNewTodos={setNewTodos} todos={todos} setTodos={setTodos} setSelected={setSelected} selected={selected} />
        <Footer allSelected={allSelected} fillterAll={fillterAll} newTodos={newTodos} setNewTodos={setNewTodos}
          fillterActive={fillterActive} fillterCompleted={fillterCompleted}
         activeSelected={activeSelected} completedSelected={completedSelected}
         todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
