import React, { useContext, useState } from 'react'
import useTodo from '../Context/TodoContext'

function TodoList({ todo }) {
    const {updateTodo,deleteTodo,checkTodo} = useTodo()
    const [isEditable,setEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)

    const editTodo = ()=>{
        updateTodo({...todo,todo:todoMsg.todo},todo.id)
        setEditable(false)
    }

    const checkTodos = ()=>{
        checkTodo(todoMsg.id)
        setEditable(false)
    }


  return (

    <div className='w-full flex items-center justify-center'>


    <div className='w-5/12 p-2 flex items-center justify-center rounded bg-white'>
        <input type="checkbox" className='mr-4  cursor-pointer' checked={todo.checked} 
        onChange={checkTodos}/>
        <input type="text"  value={todoMsg.todo} readOnly={!isEditable} onChange={(e)=>(setTodoMsg(e.target.value))} 
            className={`${todo.checked ? 'line-through ' : ''}`}
            />
        <button onClick={()=>deleteTodo(todo.id)} className='bg-black text-white p-2 '>
            Delete
        </button>
        
        <button 
            className='bg-black text-white w-16 p-2 ml-2'
        disabled={todoMsg.checked} onClick={()=>{
            if(todoMsg.checked) return
            if(isEditable){
                editTodo();
            }else setEditable ((prev)=> !prev) }}
        >
        
            {isEditable ? ' Save ' :' Edit '}
        </button>
    </div>
    </div>
  )
}

export default TodoList