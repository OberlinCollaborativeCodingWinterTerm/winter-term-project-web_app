import "./myaccount.scss";
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';
//import Course from "../../components/course";
import {Container, Row, Col} from 'react-bootstrap';
//import Calendar from '../../components/calendar'
import Header from '../../components/header/Header'
import Courses from '../../pages/courses/Courses'

const MyAccount = () => {
    return (
        <div className="profile">
            <Header/>
            <div className="images">
                <img src="https://picsum.photos/800/600" alt="" className="cover" />
                <img src="https://picsum.photos/200" alt="" className="profilePic" />
            </div>
   
            <div className="profileContainer">
                <div className ="fullName">
                    <h1>Moe Ariyoshi</h1>
                </div>
                <div className ="userName">
                    <span> @username </span>
                </div>
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
                <AnnouncementPreviewPost
                                userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                classId="CSCI-151"
                                title="Sample Title"
                                description="Sample description text."
                                tags={["tag1", "tag2"]} />
            </Container>
        </div>
    )
}

export default MyAccount


//inspired by Lama Dev https://www.youtube.com/watch?v=FweHcYHkt9A
