import { useState } from "react";
import {Link} from 'react-router-dom';
import { Modal, Button, Form, Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap';
import './EditCourses.css';

const EditCourses = ({isShowing, handleclose}) => {

    const editTypes = [
        {name: "Add", value: '1'},
        {name: "Remove", value: '2'},
    ]

    const [userinput, setUserInput] = useState({
        coursename: "",
        type: "Add",
        //Types are add (adds a recognized course to your profile), remove,
        //and request (For courses not recognized yet, users can request them and our database can be updated accordingly)
    });

    const getAvailableCourseNames = () => {
        //will work with backend in future, for now returns a static array of recognized classnames
        let classes = ["ECON 101", "CSCI 275", "CHIN 101", "CSCI 150", "WCRM 103", "GEOG 105"];
        if(userinput.type === "Remove") {
            //this will make API call and get classes defined for logged in user
            const userEnrolledClasses = ['HIST 163']
            return userEnrolledClasses;
        }
        return classes;
    }

    const checkCourseRequestInput = (input) => {
        const regex = new RegExp('[A-Z][A-Z][A-Z][A-Z] [0-9][0-9][0-9]$');
        if(input === 0) {
            return false;
        } else {
            return regex.test(input);
        }
    }

    const buttonvariantselector = () => {
        if(userinput.type === "Add") {
            return 'success';
        } else if (userinput.type === "Remove") {
            return 'danger';
        } else {
            return 'warning';
        }
    }
    
    const handlesubmit = (cancelSubmit) => {
        
        //gets data as store in function state userinput
        if(!cancelSubmit){
            console.log("Submitted course edit request!");
            console.log(userinput);
        }


        //resets user input state
        setUserInput({
            coursename : "",
            type: "Add",
        })
        //closes the modal
        handleclose(false);
    }

    return (
        <Modal show={isShowing} onHide={() => (handlesubmit(true))} centered>
            <Col className="modalcolumn">
                <Modal.Header closeButton>
                    <Modal.Title>{(userinput.type !== "Remove") ? "Add New Course" : "Remove Course" }</Modal.Title>
                </Modal.Header>
                <Row className="edittypeselector">
                    <ButtonGroup>
                        {editTypes.map((type, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`button-${idx}`}
                            type="radio"
                            variant={(type.name === 'Add') ? 'outline-success' : 'outline-danger'}
                            name="edittypeselector"
                            value={type.value}
                            checked={userinput.type === type.name || (userinput.type === 'Request' && type.name === 'Add')}
                            onChange={(button) => {
                                setUserInput({
                                    coursename : userinput.coursename,
                                    type: (button.currentTarget.value === '1') ? "Add" : "Remove",
                                });
                            }}
                        >
                        {type.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Row>
                <Row className="addnewcourse">
                    <div>
                        <Form.Select
                        disabled = {userinput.type === "Request"}
                        onChange={(e) => (setUserInput({
                            coursename: e.target.value,
                            type: userinput.type,
                        }))}>
                            <option key='blankchoice' hidden>{(userinput.type !== "Remove") ? "Select course to add" : "Select course to remove" }</option>
                        {getAvailableCourseNames(userinput.type).map((item, idx) => (
                            <option key={idx}>{item}</option>
                        ))}
                        </Form.Select>
                    </div>
                </Row>
                <span hidden={userinput.type === "Remove"} className="requestcoursetoggle">Course not listed? <Link onClick={() => {setUserInput({coursename : "", type: "Request"})}}>Request Course</Link></span>
                <Row hidden={userinput.type === "Remove"} className="coursename">
                    <div>
                        <Form.Floating>
                            <Form.Control
                            id="coursename"
                            type="text"
                            placeholder="Enter Course Name"
                            onChange={(e) => (setUserInput({
                                coursename: e.target.value,
                                type: "Request",
                            }))}
                            disabled = {(userinput.type !== "Request") ? true : false}
                            isValid = {(userinput.type === "Request") ? checkCourseRequestInput(userinput.coursename) : undefined}
                            isInvalid = {(userinput.type === "Request") ? !checkCourseRequestInput(userinput.coursename) : undefined}
                            autoComplete="off"
                            />
                            <label htmlFor="title">Course Name</label>
                        </Form.Floating>
                    </div>
                </Row>
                <Row className="addnewcoursebuttons">
                    <Modal.Footer>
                        <Button variant="outline-danger" size="lg" type="button" onClick={() => (handlesubmit(true))}>Cancel</Button>
                        <Button variant={buttonvariantselector()} size="lg" type="submit" onClick={() => (handlesubmit(false))}>{userinput.type}</Button>
                    </Modal.Footer>
                </Row>
            </Col>
        </Modal>
    )
}

export default EditCourses;