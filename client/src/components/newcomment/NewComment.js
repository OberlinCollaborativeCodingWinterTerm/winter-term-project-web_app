import React, {useState} from "react";
import './newComment.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewComment = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = '',
  handleCancel} ) => {

  const [inputText, setInputText] = useState(initialText);
  const isTextareaDisabled = inputText.length === 0;


  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function onSubmit(event){
    event.preventDefault();
    handleSubmit(inputText);
    setInputText("");
  }

  return (
      <Form.Group>
        <Form.Control as="textarea" rows={3}
          onChange={handleChange}
          id="commentText"
          value = {inputText}
        />
        <Button variant="primary" disabled={isTextareaDisabled} onClick={onSubmit}>{submitLabel} </Button>
        {hasCancelButton && (
          <button
          type="button"
          onClick={handleCancel}
          >Cancel</button>)}
      </Form.Group>
  );
};

export default NewComment;
