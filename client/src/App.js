//import logo from './logo.svg';
import './App.scss';
import {Outlet, Route, Routes} from "react-router-dom";

// component imports
//import Filter_sidebar from './components/filter_sidebar/Filter_sidebar';
import FilterSidebar from './components/filtersidebar/FilterSidebar';
import Sidebar from './components/sidebar/Sidebar';
import Header from "./components/header/Header";
import Posts from './components/posts/Posts';

// page imports 
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ViewPost from "./pages/viewpost/ViewPost";
import Courses from './pages/courses/Courses';
import Calendar from './pages/calendar/calendar';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HeaderContainer />}>
                <Route path="" element={<Posts />} />
                {/* put routes for other pages under here */}
                <Route path="filters" element={<FilterSidebar />} />
                <Route path="viewpost" element={<ViewPost />} />
                <Route path='courses' element={<Courses />} />
                <Route path='calendar' element={<Calendar />} />
                
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
