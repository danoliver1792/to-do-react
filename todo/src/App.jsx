import { useState } from 'react';
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import './App.css';

function App() {
  // armazenando os dados iniciais
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");

  // funcao para atribuir nova tarefa
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
  };

  // funcao para remover tarefas
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id? todo : null);

    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <div className="todo-list">
      {/* percorrendo todo array e exibindo cada item do to-do com map */}
      {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />))}
    </div>
    <TodoForm addTodo={addTodo} />
  </div>
}

export default App
