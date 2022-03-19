import React from 'react'
import ToDo from './ToDo'

export default function ToDos(props) {
  return (

<div className='container'>

<h3 className='text-center my-3'>List of the to do</h3>

{props.todos.map((todo)=>{

return <ToDo todo={todo}/>

}
)}







</div>

    





    
  )
}
