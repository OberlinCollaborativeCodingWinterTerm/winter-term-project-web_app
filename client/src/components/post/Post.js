import "./Post.scss";
import React from "react";
import {Badge, Container, Row, Col} from "react-bootstrap";
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

    feedbackContent() {
        return (
            <>
            </>
        )
    }

    render() {
        return (
            <Container>
                <p className="pb-1"><small><img alt="" src={this.props.userIcon} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  /> <span className="px-1">username</span><Badge pill bg="primary">STUDENT</Badge>
                    <span className="px-1">&middot; posted in <Link to={"/classes/" + this.props.classId}>{this.props.classId}</Link></span></small></p>
                <h2>{this.props.title} <Badge pill bg="success">OPEN</Badge></h2>
                <p>{this.props.description}</p>
                {this.postContent()}
                <Row className="justify-content-md-end">{this.props.tags.map((tag) => <Col key={tag} md="auto" className="px-1"><Badge pill bg="secondary">{tag}</Badge></Col>)}</Row>
                {/* user, title, description, tags, like button is universal */
                 /* post content is what differentiates different types of posts */
                 /* feedback content is what is under the post, being comments, answers, group chat, etc. */}
            </Container>
        );
    }
}