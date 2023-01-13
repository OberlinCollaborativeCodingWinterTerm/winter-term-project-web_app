/*
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


*/
import "./post_preview.scss";
import React from "react";
import {Badge, Container} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class PostPreview extends React.Component {
    constructor(props, defaultState) {
        super(props);
        this.state = defaultState;
    }

    previewPostContent() {
        return (
            <> 
            </>
        )
    }
    render() {
        return (
            <Container className="container-md bg-white mt-5 p-4">
                <p className="mb-1 text-secondary"><small><img alt="" src={this.props.userIcon} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  /> <span className="px-1">username</span><Badge pill bg="primary">STUDENT</Badge>
                    <span className="px-1">&middot; posted in <Link to={"/classes/" + this.props.classId}>{this.props.classId}</Link></span></small></p>
                <h2>{this.props.title} <Badge pill bg="success">OPEN</Badge></h2>
                <p>{this.props.description}</p>
                {this.previewPostContent()}
                <div className="d-flex justify-content-md-end">{this.props.tags.map((tag) => <Badge className="mx-1" key={tag} pill bg="secondary">{tag}</Badge>)}</div>
                {/* user, title, description, tags, like button is universal */
                 /* post content is what differentiates different types of posts */
                 /* feedback content is what is under the post, being comments, answers, group chat, etc. */ }
            </Container>
        );
    }
}
