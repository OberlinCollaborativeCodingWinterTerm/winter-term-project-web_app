//import logo from './logo.svg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {Route, Routes} from "react-router-dom";
//import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
