import React from 'react';
import "./home.scss";
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';
import Sidebar from "../../components/sidebar/Sidebar";
import {Col, Container} from "react-bootstrap";
import Posts from '../../components/posts/Posts';
import FAButton from '../../components/fabutton/FAButton';

const Home = () => {
    return (
        <div className="w-100 h-100">
            <Container fluid className="p-0 h-100">
                <div className="d-flex h-100">
                    <Col md="auto">
                        <Sidebar className="h-100" />
                    </Col>
                    <Col className="hidden-scroll">
                        <Posts />
                        <FAButton tooltip="New Post"/>
                    </Col>
                </div>
            </Container>
        </div>
    ); 
}; 

export default Home; 