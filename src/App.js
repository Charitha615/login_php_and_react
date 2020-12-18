import logo from './logo.svg';
import './App.css';
import 'php.php';

function App() {
  return (

    <form action= "php.php" method = "post">
    <div className="login-box">
    <h1>Login</h1>
    <div className="textbox">
      
      <input type="text" placeholder="Username" name= "user" />
    </div>
    <div className="textbox">
    
      <input type="password" placeholder="Password" />
    </div>
    <input type="button" className="btn" defaultValue="Sign in" name= "password" />
  </div>
  </form>
  );
}

export default App;
