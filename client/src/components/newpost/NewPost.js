import {react, useState } from "react";
import { Modal, Button, Form, FloatingLabel , ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap';
import './NewPost.css';

const NewPost = ({isShowing, handleclose}) => {
    const postTypes = [
        {name: "Question", value: '1'},
        {name: "Study Group", value: '2'},
    ]

    const [currentType, setCurrentType] = useState('1');

    const [userinput, setUserInput] = useState({
        "title": "",
        "type": 'question',
        "content": "",
    })
    
    const handlesubmit = () => {
        //gets data and closes the modal
        console.log("Submitted new post!")
        console.log(userinput);
        handleclose(false);
    }

    return (
        <Modal show={isShowing} onHide={() => (handleclose(false))} centered>
            <Col className="modalcolumn">
                    <Modal.Header closeButton>
                        <Modal.Title>New post</Modal.Title>
                    </Modal.Header>
                <Row className="newposttitle">
                    <div>
                        <Form.Floating>
                            <Form.Control
                            id="newposttileinput"
                            type="text"
                            placeholder="Enter Title"
                            onChange={(e) => (setUserInput({
                                "title": e.target.value,
                                "type" : userinput.type,
                                "content": userinput.content,
                            }))}
                            />
                            <label htmlFor="title">Title</label>
                        </Form.Floating>
                    </div>
                </Row>
                <Row className="newposttypeselector">
                    <ButtonGroup>
                        {postTypes.map((type, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`button-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            name="posttypeselector"
                            value={type.value}
                            checked={currentType === type.value}
                            onChange={(button) => {setCurrentType(button.currentTarget.value); setUserInput({
                                "title": userinput.title,
                                "type" : (button.currentTarget.value === '1') ? "question" : "studygroup",
                                "content": userinput.content,
                            })}}
                        >
                        {type.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Row>
                <Row className="newpostcontent">
                    <div>
                        <FloatingLabel label="What's Happening?" controlId="floatingTextarea2">
                        <Form.Control
                            as="textarea"
                            placeholder="What's happening?"
                            onChange={(e) => (setUserInput({
                                "title": userinput.title,
                                "type" : userinput.type,
                                "content": e.target.value,
                            }))}
                            />
                        </FloatingLabel>
                    </div>
                </Row>
                <Row className="newpostbutton">
                    <Modal.Footer>
                        <Button variant="outline-secondary" size="lg" type="button" onClick={() => (handleclose(false))}>Dismiss</Button>
                        <Button variant="primary" size="lg" type="submit" onClick={() => (handlesubmit())}>Post</Button>
                    </Modal.Footer>
                </Row>
            </Col>
        </Modal>
    )
}

export default NewPost;