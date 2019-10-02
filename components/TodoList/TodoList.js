import React, { useContext } from 'react';
import { Context } from '../../pages/_app';
import { sortDate, searchFilter } from '../../common/common';
import Todo from './Todo';

const TodoList = () => {
  const { state: {
    todoList,
    searchTodoName,
  } } = useContext(Context);


  const filteredTodo = todoList
    .sort(sortDate)
    .filter(searchFilter(searchTodoName))

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