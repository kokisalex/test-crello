import Router from 'next/router'

const ButtonBack = () => (
  <button className="btn btn-outline-secondary" onClick={() => Router.push('/')} >
    <img src="/static/icon/caret-left.svg" />
  </button>)

export default ButtonBack;