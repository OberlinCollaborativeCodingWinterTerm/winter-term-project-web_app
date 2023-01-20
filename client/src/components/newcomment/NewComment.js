import React, {useState} from "react";
import './newComment.scss';
import Form from 'react-bootstrap/Form';

const NewComment = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = '',
  handleCancel }) => {

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
      <Form.Group onSubmit={onSubmit}>
        <textarea
        onChange={handleChange}
        id="commentText"
        value = {inputText}
        />
        <button disabled={isTextareaDisabled}>{submitLabel}</button>
        {hasCancelButton && (
          <button
          type="button"
          onClick={handleCancel}
          >Cancel</button>)}
      </Form.Group>
  );
};

export default NewComment;
