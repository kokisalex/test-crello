import React, { useContext } from 'react';
import { Context } from '../../pages/_app';
import { inputValue } from '../../common/common';

const FormCreateTodo = () => {
  const {
    state: {
      todoTitle,
      todoBody,
    },
    action: {
      saveTodo,
      changeState,
    }
  } = useContext(Context);
  return (
    <>
      <div className="form-group">
        <label>Name Todo</label>
        <input value={todoTitle} onChange={({ target }) => changeState('todoTitle', target.value)} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Todo Description</label>
        <textarea value={todoBody} onChange={({ target }) => changeState('todoBody', target.value)} className="form-control" rows="3"></textarea>
      </div>
      <div className="nav justify-content-end">
        <button disabled={!inputValue(todoTitle, todoBody)} onClick={saveTodo} className="btn btn-light btn-lg">
          Save
        </button>
      </div>
    </>
  );
};

export default FormCreateTodo;