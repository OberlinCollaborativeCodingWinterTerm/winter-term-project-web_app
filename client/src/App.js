//import logo from './logo.svg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {Route, Routes} from "react-router-dom";
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
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
      </Routes>
    </div>
  );
}

const HeaderContainer = () => (
    <>
        <Header />
        <Outlet />
    </>
)

export default App;
// hello
