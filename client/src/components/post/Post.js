import "./Post.scss";
import React from "react";
import {Badge, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiFillQuestionCircle} from "react-icons/ai";
import {LinkContainer} from "react-router-bootstrap";
import CommentSection from "../commentsection/CommentSection";

export default class Post extends React.Component {
    constructor(props, defaultState) {
        super(props);
        this.state = {
            preview: !!(props.preview),
            grayed: false,
            ...defaultState
        };
        this.postContent = this.postContent.bind(this);
        this.feedbackContent = this.feedbackContent.bind(this);
    }

    postContent(props) {
        return (
            <>
            </>
        )
    }

    feedbackContent(props) {
        return (
            <CommentSection currentUserId={1} />
        )
    }

    iconDisplay(props) {
        return (
            <AiFillQuestionCircle {...props} />
        )
    }

    render() {
        return (
            <>
                <LinkContainer to={this.state.preview ? "/post/" + this.props.postId : ""}>
                    <Container className={this.state.preview ? "container-md bg-white my-4 p-4 shadow-sm rounded-4" : "container-md bg-white mt-5 p-4 shadow-sm rounded-4"}>
                        <p className={`mb-1 text-secondary d-flex align-items-start`}>
                            <small className="me-auto d-flex align-items-center"><img alt="" src={this.props.user.icon} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  /> <span className="px-1"><Link to={`/users/${this.props.user.username}`} className="text-decoration-none link-secondary">{this.props.user.firstName + " " + this.props.user.lastName}</Link></span><Badge pill bg="student">{this.props.user.flair.toUpperCase()}</Badge>
                            <span className="px-1">&middot; posted in <Link className="text-primary" to={"/courses/" + this.props.course}>{this.props.course}</Link></span></small>
                            <this.iconDisplay className="text-quaternary" size="2em" />
                        </p>
                        <span className={`pe-5 ${this.state.preview ? "h3" : "h2"}`}>
                            <span className={`me-2 ${this.state.grayed ? "text-tertiary" : ""}`}>{this.props.title}</span>
                            {(this.props.flair != null) && <Badge pill bg={this.props.flair.toLowerCase()}>{this.props.flair.toUpperCase()}</Badge>}
                        </span>
                        <p className={this.state.preview ? (this.state.grayed ? "text-tertiary" : "text-secondary") : "text-body"}>{this.props.description}</p>
                        <this.postContent {...this.props} />
                        <div className="d-flex justify-content-md-end">{this.props.tags.map((tag) => <Link to="" key={tag}><Button style={{paddingRight: "0.75em", paddingLeft: "0.75em"}} className="mx-1 badge rounded-pill" variant="secondary">{tag}</Button></Link>)}</div>
                        {/* user, title, description, tags, like button is universal */
                         /* post content is what differentiates different types of posts */
                         /* feedback content is what is under the post, being comments, answers, group chat, etc. */}
                    </Container>
                </LinkContainer>
                {!this.state.preview &&
                    <Container className="container-md mt-4">
                        <this.feedbackContent {...this.props} />
                    </Container>
                }
            </>
        );
    }
}