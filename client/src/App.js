//import logo from './logo.svg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import './App.scss';
import ViewPost from "./pages/viewpost/ViewPost";
import FilterSidebar from './components/filtersidebar/FilterSidebar';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HeaderContainer />}>
                <Route path="" element={<></>} />
                {/* put routes for other pages under here */}
                <Route path="filters" element={<FilterSidebar />} />
                <Route path="viewpost" element={<ViewPost />} />
            </Route>
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
