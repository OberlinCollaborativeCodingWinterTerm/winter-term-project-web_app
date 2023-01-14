import React from "react";
import './course.scss';
import { Card, Container, Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";
import {FaGraduationCap, FaUser, FaComments} from "react-icons/fa";

const Course = ({course}) => {
    return (
        <div className="course">
            <div className="container" >
                    <Card style={{ width: '16rem'}}
                        onClick={()=>{window.location.pathname="/classes/:id"}}
                    >
                        <Card.Header className="text-bg-primary p-3">
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Subtitle>{course.department}{course.courseId}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Container className="text-left">
                                <Row>
                                    <Col><FaGraduationCap/>  {course.instructors}</Col>
                                </Row>
                                <Row>
                                    <Col><FaUser/>  {course.studentCount} students</Col>
                                </Row>
                                <Row>
                                    <Col><FaComments/>  {course.questions} unanswered questions</Col>
                                </Row>
                            </Container>
                             
                        </Card.Body>
                    </Card>
            </div>
        </div>
        
    )
}



export default Course;