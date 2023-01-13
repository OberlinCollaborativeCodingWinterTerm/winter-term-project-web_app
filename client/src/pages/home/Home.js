import React from 'react';
import "./home.scss";
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';
import Sidebar from "../../components/sidebar/Sidebar";
import {Col, Container} from "react-bootstrap";

const Home = () => {
    return (
        <div className="w-100 h-100">
            <Container fluid className="p-0 h-100">
                <div className="d-flex h-100">
                    <Col md="auto">
                        <Sidebar className="h-100" />
                    </Col>
                    <Col className="hidden-scroll">
                        <Container className="pt-5" style={{ maxWidth: 750 }}>
                            <AnnouncementPreviewPost
                                userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                classId="CSCI-151"
                                title="Sample Title"
                                description="Sample description text."
                                tags={["tag1", "tag2"]} />
                        </Container>
                    </Col>
                </div>
            </Container>
        </div>
    ); 
}; 

export default Home; 