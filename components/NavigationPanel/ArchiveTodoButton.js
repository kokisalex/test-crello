import Router from 'next/router'

const toArchive  = () => Router.push({
  pathname: '/',
  query: { archive: true },
})

const ArchiveTodoButton = () => (
  <button className="btn btn-outline-secondary" onClick={toArchive} >
    <img src="/static/icon/box.svg" />
  </button>)

export default ArchiveTodoButton;