import React from "react";
import "./post_preview.scss";
import Badge from 'react-bootstrap/Badge';

function BasicExample() {
  return (
    <div>
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
    </div>
  );
}

export default BasicExample;

function PillExample() {
  return (
    <div>
      <Badge pill bg="primary">
        Primary
      </Badge>{' '}
      <Badge pill bg="secondary">
        Secondary
      </Badge>{' '}
      <Badge pill bg="success">
        Success
      </Badge>{' '}
      <Badge pill bg="danger">
        Danger
      </Badge>{' '}
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <Badge pill bg="info">
        Info
      </Badge>{' '}
      <Badge pill bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge pill bg="dark">
        Dark
      </Badge>
    </div>
  );
}
export default PillExample;



function PostPreview(){
  return pass
}

export default PostPreview;
