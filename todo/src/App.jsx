import { useState } from 'react';
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
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
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {/* percorrendo todo array e exibindo cada item do to-do com map */}
      {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
    </div>
    <TodoForm addTodo={addTodo} />
  </div>
}

export default App
