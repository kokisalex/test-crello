import React, { useContext } from 'react';
import { Context } from '../../pages/_app';

const SearchTodo = () => {
  const {
    state: {
      searchTodoName,
    },
    action: {
      changeState
    },
  } = useContext(Context)

  return (
    <div className="input-group">
      <input value={searchTodoName} onChange={({ target }) => changeState('searchTodoName', target.value)} type="text" className="form-control" />
    </div>
  )
}

export default SearchTodo;