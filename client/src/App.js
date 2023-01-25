//import logo from './logo.svg';
import './App.scss';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";

// component imports
//import Filter_sidebar from './components/filter_sidebar/Filter_sidebar';
import FilterSidebar from './components/filtersidebar/FilterSidebar';
import Header from "./components/header/Header";

// page imports
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ViewPost from "./pages/viewpost/ViewPost";
import Courses from './pages/courses/Courses';
//import Calendar from './components/calendar/calendar';
import Home from './pages/home/Home';
import MyAccount from './pages/myaccount/MyAccount';
import CourseFeed from "./pages/coursefeed/CourseFeed";
import { AuthContextProvider } from './contexts/AuthContext';
import {useAuthContext} from "./hooks/useAuthContext";

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
        <Routes>
            <Route path="login" element={<UnauthorizedContainer><Login /></UnauthorizedContainer>} />
            <Route path="register" element={<UnauthorizedContainer><Register /></UnauthorizedContainer>} />
            <Route path="/" element={<HeaderContainer />}>
                <Route path="" element={<Home />} />
                {/* put routes for other pages under here */}
                <Route path="filters" element={<FilterSidebar />} />
                <Route path="post/:id" element={<ViewPost />} />
                <Route path='courses' element={<Courses />} />
                <Route path="settings" element={<MyAccount />}/>
                <Route path="courses/:course" element={<CourseFeed />} />
            </Route>
        </Routes>
        </AuthContextProvider>
    </div>
  );
}

const UnauthorizedContainer = (props) => {
    const auth = useAuthContext();
    return (
        auth.user && auth.user.token ? <Navigate replace to="/" /> : <>{props.children}</>
    )
}

const HeaderContainer = () => {
    const auth = useAuthContext();
    return (
        auth.user && auth.user.token ?
            (<>
                <div id="header-manager" className="d-flex flex-column vh-100">
                    <Header />
                    <div id="app-content" className="h-100">
                        <Outlet />
                    </div>
                </div>
            </>) : (<Navigate replace to="/login" />)
    )
}

export default App;
// hello
