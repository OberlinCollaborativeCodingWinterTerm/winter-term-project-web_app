import "./Post.scss";
import React from "react";
import {Badge, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Post extends React.Component {
    constructor(props, defaultState) {
        super(props);
        this.state = defaultState;
    }

    postContent() {
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
                {this.postContent()}
                <div className="d-flex justify-content-md-end">{this.props.tags.map((tag) => <Badge className="mx-1" key={tag} pill bg="secondary">{tag}</Badge>)}</div>
                {/* user, title, description, tags, like button is universal */
                 /* post content is what differentiates different types of posts */
                 /* feedback content is what is under the post, being comments, answers, group chat, etc. */}
            </Container>
        );
    }
}