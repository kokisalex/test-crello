import React, { useContext } from 'react';
import { Context}  from '../../pages/_app';
import { formatDate } from '../../common/common';


const TodoRender = ({ _id, title, date, body, archive }, index) => {

  const { action: {
    removeTodo,
    changeTodo,
  } } = useContext(Context);
  
  return (
    <tr key={_id} className={archive ? "text-muted" : ""}>
      <th scope="row">{index + 1}</th>
      <td>{formatDate(date)}</td>
      <td>{title}</td>
      <td>
        {
          body
        }
      </td>
      <td className="btn-group col">
        {!archive && <button onClick={() => changeTodo(_id)} className="btn btn-secondary btn-light">
          <img src="/static/icon/check.svg" />
        </button>}
        <button onClick={() => removeTodo(_id)} className="btn btn-secondary btn-light">
          <img src="/static/icon/trash.svg" />
        </button>
      </td>
    </tr>
  )
}

export default TodoRender;