import React from "react";
import './commentsection.scss';
import Comment from '../comment/Comment';
import { Container } from "react-bootstrap";

// temporary comment section
const comments = [
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
        },
        {
            id: 2,
            postId: 1,
            content: "This is another test comment",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "bgeitz",
                firstName: "Bob",
                lastName: "Geitz",
                flair: "professor"
            }
        },
]

const CommentSection = () => {

    return (
        <div className="commentsection">
            <Container style={{ maxWidth: 750 }}>
                {comments.map(comment=>(
                    <Comment
                        user={comment.user}
                        postId={comment.postId}
                        content={comment.content}
                        key={comment.id}
                    />
                ))}
            </Container>
        </div>
    )
    
}

export default CommentSection