import React, { createContext, useState } from 'react'

const initialTodos = [
  { id: 1, done: false, text: 'Buy Milk '},
  { id: 2, done: false, text: 'Code Something'},
  { id: 3, done: false, text: 'Read Motivation Book'},
]

const TodoPoolContext = createContext()

export const TodoPoolProvider = (props) => {

  const [todos, setTodos] = useState(initialTodos)

  const doneTodo = (todoId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: true,
          }
        } else {
          return todo
        }
      })
    )
  }

  const addTodo = (text) => {
    const id = todos[todos.length - 1].id + 1
    setTodos(
      [
        ...todos,
        {
          id,
          text,
          done: false,
        }
      ]
    )
  }

  const removeTodo = (todoId) => {
    setTodos(
      todos.filter((todo) => todo.id !== todoId)
    )
  }

  return (
    <TodoPoolContext.Provider value={{
      todos,
      doneTodo,
      addTodo,
      removeTodo
    }}>
      {props.children}
    </TodoPoolContext.Provider>
  )
}

export default TodoPoolContext
