import React, { useContext } from 'react';
import { Context } from '../../pages/_app';
import Todo from './Todo';

const TodoList = () => {
  const { state: {
    todoList,
    searchTodoName,
  } } = useContext(Context);


  const filteredTodo = todoList.sort((a, b) => a.date > b.date && -1 ).filter(item => item.title.includes(searchTodoName))

  return (
    <table className="table">
      <thead>
        <tr>
          <th >#</th>
          <th >Date</th>
          <th >Name</th>
          <th >Description</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredTodo.map(Todo)
        }
      </tbody>
    </table>
  )
}

export default TodoList;