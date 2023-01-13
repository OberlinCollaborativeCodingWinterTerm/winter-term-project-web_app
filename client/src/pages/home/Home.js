import React from 'react';
import "./home.scss";
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';
import Sidebar from "../../components/sidebar/Sidebar";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <div className="w-100 h-100">
            <Sidebar className="position-fixed h-100" />
            <Container className="pt-5" style={{ maxWidth: 750 }}>
                <AnnouncementPreviewPost
                    userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    classId="CSCI-151"
                    title="Sample Title"
                    description="Sample description text."
                    tags={["tag1", "tag2"]} />
            </Container>

        </div>
    ); 
}; 

export default Home; 