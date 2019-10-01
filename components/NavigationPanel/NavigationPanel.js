import { withRouter } from 'next/router'
import CreateTodo from './CreateTodoButton';
import SearchTodo from './SearchTodo';
import ButtonBack from './ButtonBack';
import ArchiveTodoButton from './ArchiveTodoButton';


const NavigationPanel = ({ router: { route } }) => {

  return (
    <nav className="nav justify-content-end">
      <li className="nav-item nav-link">
        {route === '/create' ? null : <SearchTodo />}
      </li>
      <li className="nav-item nav-link">
        {
          route === '/create' ? <ButtonBack /> : (<><CreateTodo /> <ArchiveTodoButton /></>)
        }
      </li>
    </nav>
  )
}

export default withRouter(NavigationPanel);