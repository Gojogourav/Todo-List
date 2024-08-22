import React, { useContext,useState } from 'react'
import useTodo from '../Context/TodoContext'

function TodoForm() {
  const [todo,setTodo] = useState("")
  const {addTodo} = useTodo()
  

  const add = (e)=>{
    e.preventDefault()

    if(!todo) return

    addTodo({id:Date.now(),todo:todo,completed:false})
    setTodo("")
  }
  return (
    <form onSubmit={add} action="" className='w-full items-center justify-center flex'>
      <input className='p-2 w-4/12 flex-col rounded outline-none border border-gray-400 m-2' type="text" placeholder='Add Todos...' 
      value={todo} onChange={(e)=>setTodo(e.target.value)} 
      />
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type='submit'>Add</button>
    </form>
  )
}

export default TodoForm