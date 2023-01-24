import React, {useState} from 'react';
import './courses.scss'
import Course from '../../components/course/Course';
import {Container, Row} from 'react-bootstrap';
import FAButton from '../../components/fabutton/FAButton';
import EditCourses from '../../components/editcourses/EditCourses';

const Courses = () => {

    const [ShowAddNewCourseWindow, setShowAddNewCourseWindow] = useState(false);

    const handleclick = () => {
        setShowAddNewCourseWindow(!ShowAddNewCourseWindow);
    }

    // temporary array of example classes for demo
    const courses = [
        {
            id: 1,
            department: 'CSCI',
            courseId: 150,
            name: "Introduction to Computer Science",
            section: 1,
            instructors: ['Cynthia Taylor'],
            studentCount: 45,
            questions: 0
        }, 
        {
            id: 2,
            department: 'CSCI',
            courseId: 151,
            name: "Data Structures",
            section: 1,
            instructors: ['Bob Geitz'],
            studentCount: 53,
            questions: 5
        }, 
        {
            id: 3,
            department: 'ECON',
            courseId: 101,
            name: "Principles of Economics",
            section: 3,
            instructors: ['Sean Osell'],
            studentCount: 33,
            questions: 12
        }, 
        {
            id: 4,
            department: 'CHIN',
            courseId: 101,
            name: "Elementary Chinese 1",
            section: 2,
            instructors: ['John Smith'],
            studentCount: 18,
            questions: 1
        }, 
    ]

    return (
        <div className='courses'>
            <Container className="p-0 mt-5">
                <Row className="row-cols-sm-1 gap-4" style={{ columnGap: 0 }}>
                {courses.map(course=>(
                    <Course course={course} key={course.id}/>                    ))}
                </Row>
            </Container>
            <FAButton tooltip="Add new course" handleclick={handleclick}/>
            <EditCourses isShowing={ShowAddNewCourseWindow} handleclose={handleclick}/>
        </div>
    )
}

export default Courses;