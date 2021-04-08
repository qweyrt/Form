
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import AddProduct from './components/addproduct';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Product</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login" exact={true}>
          <Login/>
        </Route>
        <Route path="/register" exact={true}>
          <Register/>
        </Route>
        <Route path="/addproduct" exact={true}>
          <AddProduct/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
