import React from 'react';
import './courses.scss'
import Course from '../../components/course/Course';

const Courses = () => {

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
            {courses.map(course=>(
                <Course course={course} key={course.id}/>
            ))}

        </div>
    )
}

export default Courses;