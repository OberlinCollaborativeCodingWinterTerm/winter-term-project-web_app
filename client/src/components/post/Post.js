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
        let data = this.props.postDetails;
        console.log(data);
        return (
            <>
                <LinkContainer to={this.state.preview ? "/post/" + data._id : ""}>
                    <Container className={this.state.preview ? "container-md bg-white my-4 p-4 shadow-sm rounded-4" : "container-md bg-white mt-5 p-4 shadow-sm rounded-4"}>
                        <p className={`mb-1 text-secondary d-flex align-items-start`}>
                            <small className="me-auto d-flex align-items-center"><img alt="" src={/* add user icon to db */ "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  /> <span className="px-1"><Link to={`/users/${data.author._id}`} className="text-decoration-none link-secondary">{data.author.firstName + " " + data.author.lastName}</Link></span><Badge pill bg="student">{/* add flair per course */ "STUDENT"}</Badge>
                            <span className="px-1">&middot; posted in <Link className="text-primary" to={"/courses/" + data.course._id}>{data.course.department + " " + data.course.number}</Link></span></small>
                            <this.iconDisplay className="text-quaternary" size="2em" />
                        </p>
                        <span className={`pe-5 ${this.state.preview ? "h3" : "h2"}`}>
                            <span className={`me-2 ${this.state.grayed ? "text-tertiary" : ""}`}>{data.title}</span>
                            {(data.flair != null) && <Badge pill bg={data.flair.toLowerCase()}>{data.flair.toUpperCase()}</Badge>}
                        </span>
                        <p className={this.state.preview ? (this.state.grayed ? "text-tertiary" : "text-secondary") : "text-body"}>{data.description}</p>
                        <this.postContent {...this.props} />
                        <div className="d-flex justify-content-md-end">{data.tags.map((tag) => <Link to="" key={tag}><Button style={{paddingRight: "0.75em", paddingLeft: "0.75em"}} className="mx-1 badge rounded-pill" variant="secondary">{tag}</Button></Link>)}</div>
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