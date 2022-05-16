import './App.scss';
import './bootstrap/bootstrap.scss'
import { useState } from 'react';
import LoginForm from './components/loginForm/LoginForm';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';


function App() {
  const credentials = {
    username: 'admin',
    password: 'admin'
  }

  const [user, setUser] = useState({username:''})
  const [error, setError] = useState('')
  const [todo, setTodo] = useState('')

  const Login = details => {

    console.log(details);
    if (details.username == credentials.username && details.password == credentials.password) {
      console.log("logedin");
      setUser({
        username: details.username,
      })
    } else {
      console.log("do not match");
      setError('Details do not match!');
    }
  }
  const Logout = () => {
    setUser({ username:''})
  }

  return (
    <div className="App">
      {(user.username != '') ? (
        <div>
          <Header Logout={Logout} user={user} />
          <Todos />
        </div> 
      ) : (
        <LoginForm Login={Login} error={error} />
      )} 
    </div>
  );
}

export default App;
