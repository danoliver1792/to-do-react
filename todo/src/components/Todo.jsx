import React from 'react'

const Todo = ({ todo }) => {
  return (
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
  )
}

export default Todo
