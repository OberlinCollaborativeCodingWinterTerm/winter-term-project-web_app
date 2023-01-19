import React from "react";
import './course.scss';
import { Card, Container, Row, Col} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {FaGraduationCap, FaUser, FaComments} from "react-icons/fa";

const Course = ({course}) => {
    return (
        <div className="course col col-4 flex-md-grow-0 flex-grow-1" style={{flexBasis: 300}}>
            <div className="container" >
                <LinkContainer to={"/courses/"+course.department+course.courseId}>
                    <Card className="border-0 shadow-sm rounded-4">
                        <Card.Header className="text-bg-primary p-3" style={{borderTopLeftRadius: "1em", borderTopRightRadius: "1em"}}>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Subtitle>{course.department}{course.courseId}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Container className="text-left text-secondary">
                                <Row className="align-items-center">
                                    <Col className="flex-grow-0 d-flex align-items-center pe-0"><FaGraduationCap/></Col><Col>{course.instructors}</Col>
                                </Row>
                                <Row>
                                    <Col className="flex-grow-0 d-flex align-items-center pe-0"><FaUser/></Col><Col>{course.studentCount} students</Col>
                                </Row>
                                <Row>
                                    <Col className="flex-grow-0 d-flex align-items-center pe-0"><FaComments/></Col><Col>{course.questions} unanswered questions</Col>
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