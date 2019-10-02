import { withRouter } from 'next/router'
import CreateTodo from './CreateTodoButton';
import SearchTodo from './SearchTodo';
import ButtonBack from './ButtonBack';


const NavigationPanel = ({ router: { route, query } }) => {

  return (
    <nav className="nav justify-content-end">
      <li className="nav-item nav-link">
        {route === '/create' ? null : <SearchTodo />}
      </li>
      <li className="nav-item nav-link">
        {
          route === '/create' ? <ButtonBack /> : <CreateTodo />
        }
      </li>
    </nav>
  )
}

export default withRouter(NavigationPanel);