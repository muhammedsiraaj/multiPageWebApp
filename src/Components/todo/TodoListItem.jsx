import React from 'react'
import { Button } from 'react-bootstrap'
import './TodoListItem.css'

function TodoListItem({label,count,completed,makeTodoDone,deleteTodo}) {
  return (
    <div>
      <ul>
        <li>{count+1}. {label}</li>
        {!completed && <Button className='lightbtn' size="sm" variant="success" onClick={()=> makeTodoDone (count)}>Done</Button>}
        <Button className='lightbtn' size="sm" variant="danger" onClick={()=>deleteTodo(count)}>Delete</Button>{' '}
        {/* <Button className='lightbtn' size="sm" variant="dark">Completed{`${completed}`}</Button>{' '} */}

      </ul>
    </div>
  )
}

export default TodoListItem
