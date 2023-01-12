import React from "react";
import './course.scss';
import { Card } from "react-bootstrap";

const Course = ({course}) => {
    return (
        <div className="course">
            <div className="container" >
                <Card>
                    <Card.Header>
                        {course.department}{course.courseId}
                    </Card.Header>
                    <Card.Body>
                        {course.name}
                        <li>
                            {course.instructors}
                        </li>
                        <li>
                            {course.studentCount} students
                        </li>
                        <li>
                            {course.questions} unanswered questions
                        </li>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    )
}



export default Course;