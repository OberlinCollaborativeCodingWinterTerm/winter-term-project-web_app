import React from "react";
import Posts from "../../components/posts/Posts";
import {Button, Col, Container} from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import FAButton from "../../components/fabutton/FAButton";
import {useParams} from "react-router-dom";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {LinkContainer} from "react-router-bootstrap";

class CourseFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-100 h-100">
                <Container fluid className="p-0 h-100">
                    <div className="d-flex h-100">
                        <Col md="auto" className="position-sticky">
                            <Sidebar className="h-100" />
                        </Col>
                        <Col className="hidden-scroll">
                            <Container fluid className="py-3 bg-primary text-white shadow-sm">
                                <Container style={{maxWidth: 750}}>
                                    <LinkContainer to="/courses"><Button variant="primary" className="d-inline-flex align-items-start fw-bold ps-1 border-0 rounded-2 opacity-75"><MdKeyboardArrowLeft style={{fontSize: "1.65em"}}/><span>My Courses</span></Button></LinkContainer>
                                    <h1>Class Title</h1>
                                    <h3 className="opacity-75 fw-normal">{this.props.params.course}</h3>
                                </Container>
                            </Container>
                            <Posts />
                            <FAButton tooltip="New Post"/>
                        </Col>
                    </div>
                </Container>
            </div>
        )
    }
}

export default props => <CourseFeed {...props} params={useParams()} />;