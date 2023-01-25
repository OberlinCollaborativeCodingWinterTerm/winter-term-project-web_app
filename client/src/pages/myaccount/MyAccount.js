import "./myaccount.scss";
import {Container, Row, Col} from 'react-bootstrap';
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';
//import Calendar from '../../components/calendar'
import Header from '../../components/header/Header';
import Courses from '../../pages/courses/Courses';
import Posts from '../../components/posts/Posts';
import CommentSection from '../../components/commentsection/CommentSection';
import { useAuthContext } from "../../hooks/useAuthContext";


const MyAccount = () => {
    // Get access to the user stored in local storage through the AuthContext
    const {user}=useAuthContext()
   
    return (
        <div className="profile">
            <div className="images">
                <img src="https://picsum.photos/1600/1200" alt="" className="cover" />
                <img src="https://picsum.photos/200" alt="" className="profilePic" />
            </div>

            <div className="profileContainer">
                {user && (
                    <div className ="fullName">
                        <h1>{user.firstName}</h1>
                    </div>
                )}
                
               {/* Output only if the user value is not null (logged in) to avoid to the error in the browser*/}
                {user && (
                    <div className ="userName">
                        <span> {user.email} </span>
                    </div>
                )}
                

                <div className="userInfo">
                    <div className="left">
                        <span>Majors</span>
                    </div>
                    <div className="right">
                        <span>Graduation Year</span>
                    </div>
                </div>
            </div>

            <Container>
                <h2> My Courses </h2>
                <Courses/>
            </Container>
            <Container>
                <h2> My Study Sessions </h2>

            </Container>
            <Container>
                <h2> My Posts </h2>
                <Posts/>
                <CommentSection currentUserId="1"/>
            </Container>
        </div>
    )
}

export default MyAccount


//inspired by Lama Dev https://www.youtube.com/watch?v=FweHcYHkt9A
