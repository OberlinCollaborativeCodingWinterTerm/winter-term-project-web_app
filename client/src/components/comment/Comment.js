import React from "react";
import { Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './comment.scss';

/*
    <Comment
        user={comment.user}
        postId={comment.postId}
        description={comment.content}
        key={comment.id}
    />

    EXAMPLE COMMENT (JSON FORMAT):
    {
            id: 1,
            postId: 1,
            content: "This is a test comment",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jsmith",
                firstName: "John",
                lastName: "Smith",
                flair: "student"
            }
        }
*/

export default class Comment extends React.Component {
    render() {
        return (
            <Container className="">
                <p className="mb-1 text-secondary">
                  <small>
                    <img alt="" src={this.props.user.icon} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  /> 
                    <span className="px-1"> 
                      <Link to={"/profile/" + this.props.user.id}>{this.props.user.username}</Link>
                    </span>
                    <Badge pill bg="primary">STUDENT</Badge>
                  </small>
                </p>
                <span>
                    {this.props.content}
                </span>
            </Container>
        )
    }
}