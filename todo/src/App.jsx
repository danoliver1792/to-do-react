import { useState } from 'react';
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

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {/* percorrendo todo array e exibindo cada item do to-do com map */}
      {todos.map((todo) => (
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">
                ({todo.category})
              </p>
            </div>

            {/* div para separar os botoes */}
            <div>
              <button>Completar</button>
              <button>Deletar</button>
            </div>
          </div>
        ))}
    </div>
  </div>
}

export default App
