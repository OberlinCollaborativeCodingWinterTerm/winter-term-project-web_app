import React from "react";
import './course.scss';
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {FaGraduationCap, FaUser, FaComments} from "react-icons/fa";

const Course = ({course}) => {
    return (
        <div className="course">
            <div className="container" >
                <LinkContainer to={"/courses/"+course.department+course.courseId}>
                    <Card style={{ width: '16rem'}}>
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
                </LinkContainer>
                    
            </div>
        </div>
        
    )
}



export default Course;