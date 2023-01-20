import React, {useState} from "react";
import './commentInput.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CommentInput = ({
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
          className = "textarea"
          onChange={handleChange}
          id="commentText"
          value = {inputText}
        />
        <Button
          type="button"
          class="btn btn-primary"
          disabled={isTextareaDisabled}
          onClick={onSubmit}>{submitLabel} </Button>
        {hasCancelButton && (
          <Button
          type="button"
          onClick={handleCancel}
          >Cancel</Button>)}
      </Form.Group>
  );
};

export default CommentInput;
