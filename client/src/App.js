//import logo from './logo.svg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*">
                <Route index={true} element={<Header/>} />
                {/* put routes for other pages under here */}
            </Route>
        </Routes>
    </div>
  );
}

export default App;
// hello
