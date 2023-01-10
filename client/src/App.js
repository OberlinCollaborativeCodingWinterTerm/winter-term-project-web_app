//import logo from './logo.svg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import {Outlet, Route, Routes} from "react-router-dom";
import Filter_sidebar from './components/Filter_sidebar/Filter_sidebar';
import Sidebar from './components/sidebar/Sidebar';

//import './App.css';

function App() {

  const Layout = ()=> {
    return (
      <div>
        <Filter_sidebar />
        <div style={{display:"flex"}}> 
          <Sidebar />
          <Outlet />

        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <Routes>
          <Route 
            path={"/"} 
            element={<Layout />} 
            children={[
              <Route path="/" element={<Home />}/>,
              <Route path="/profile/:id" element={<Profile />}/>
            ]}
              />
          <Route path={"/login"} exact element={<Login />} />
          <Route path={"/register"} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
// hello
