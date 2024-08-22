import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: Date.now(),
            todo: "todo message",
            checked : false
        },
    ],
    addTodo : ()=>{},
    updateTodo : ()=>{},
    deleteTodo : ()=>{},
    checkTodo :()=>{}

})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}