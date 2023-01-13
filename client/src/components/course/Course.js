import React from "react";
import './course.scss';
import { Card, Container, Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";
import {FaGraduationCap} from "react-icons/fa";

const Course = ({course}) => {
    return (
        <div className="course">
            <div className="container" >
                    <Card 
                        onClick={()=>{window.location.pathname="/classes/:id"}}
                    >
                        <Card.Header className="text-bg-primary p-3">
                            <Container className="text-left">
                                <Row>{course.name}</Row>
                                <Row>{course.department}{course.courseId}</Row>
                            </Container>
                        </Card.Header>
                        <Card.Body>
                            <Container className="text-left">
                                <Row>
                                    <div class="col-"><FaGraduationCap/> </div>
                                    <Col>{course.instructors}</Col>
                                </Row>
                                <Row>
                                    <div class="col-"> </div>
                                    <div class="col">{course.studentCount} students</div>
                                </Row>
                                <Row>
                                    <div class="-"> </div>
                                    <Col>{course.questions} unanswered questions</Col>
                                </Row>
                            </Container>
                             
                        </Card.Body>
                    </Card>
            </div>
        </div>
        
    )
}



export default Course;