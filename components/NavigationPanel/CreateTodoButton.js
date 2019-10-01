import Router from 'next/router'

const CreateTodo = () => (
  <button className="btn btn-outline-secondary" onClick={() => Router.push('/create')} >
    <img src="/static/icon/plus.svg" />
  </button>)

export default CreateTodo;