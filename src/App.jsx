import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodo] = useState([])

  const addTodo = (todo)=>{
    setTodo((prev)=>([{id:Date.now(),todo:todo,checked:false},...prev]))
  }
  const updateTodo = (updatedTodo,id)=>{
    setTodo((prev)=>prev.map((prevTodo)=> (prevTodo.id===id ? {...prev,todo:updatedTodo} : prevTodo ) ) )
  }
  const deleteTodo = (id)=>{
    setTodo((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }
  const checkTodo = (id)=>{
    setTodo((prev)=> prev.map((prevTodo)=> prevTodo.id ===id? {...prevTodo,checked:!prevTodo.checked} : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if(todos && todos.length > 0){
      setTodo(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,checkTodo}}>
      <div className="flex-col items-center justify-center w-screen h-screen font-medium">
      <div className="flex-col content-center flex-grow items-center justify-center h-full text-gray-600 bg-gray-100 ">
        <TodoForm/>
        {
         todos.map((todo)=>
          <div key={todo.id} className='flex-col items-center justify-center'>
            <TodoList todo={todo} />
          </div>
        ) 
        }
      </div>
      </div>
    </TodoProvider>
  )
}

export default App
