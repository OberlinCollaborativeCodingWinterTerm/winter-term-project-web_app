import React, {useEffect, useState} from "react";
import Posts from "../../components/posts/Posts";
import {Button, Col, Container} from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import FAButton from "../../components/fabutton/FAButton";
import {useParams} from "react-router-dom";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {LinkContainer} from "react-router-bootstrap";
import {useCourseData} from "../../hooks/useCourseData";

const CourseFeed = (props) => {
    const {getCourseData} = useCourseData();
    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        getCourseData(props.params.course).then((data) => {
            setCourseData(data)
        })
    }, [])

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
                                <h1>{courseData.fullName}</h1>
                                <h3 className="opacity-75 fw-normal">{courseData.department} {courseData.number}</h3>
                            </Container>
                        </Container>
                        <Posts filters={{courseId: props.params.course}} />
                        <FAButton tooltip="New Post"/>
                    </Col>
                </div>
            </Container>
        </div>
    )
}

export default props => <CourseFeed {...props} params={useParams()} />;