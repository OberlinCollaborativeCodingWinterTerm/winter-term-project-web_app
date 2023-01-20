
import { Container } from "react-bootstrap";
import {
  sampleComments as sampleCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi
} from './SampleComments';

import React, {useState, useEffect} from "react";
import './commentsection.scss';
import Comment from '../comment/Comment';
import NewComment from "../newcomment/NewComment";


const CommentSection = ({currentUserId}) => {

  const [backendComments, setBackendComments] = useState([]);
  const [activity, setActivity] = useState(null);

  const rootComments = backendComments.filter(backendComment => backendComment.parentCommentId === null);

  console.log("backendComments", backendComments);

  const addComment = (inputText, parentCommentId) => {
    console.log("addComment", inputText, parentCommentId);
    createCommentApi(inputText, parentCommentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActivity(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      deleteCommentApi(commentId).then(()=> {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    };
  };

  const updateComment = (inputText, commentId) => {
    updateCommentApi(inputText, commentId).then(()=> {
      const updatedBackendComments = backendComments.map(backendComment => {
        if (backendComment.id === commentId) {
          return {...backendComment, content: inputText}
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActivity(null);
    });
  };


  useEffect(() => {
    sampleCommentsApi().then(data => {
      setBackendComments(data);
    });
  }, []);

  const getReplies = (commentId) => {
    backendComments.filter(backendComment => (backendComment.parentCommentId === commentId));
  };


  return (
    <div>
      <h3>Comments</h3>
           <div>
              <NewComment submitLabel = "Comment" handleSubmit={addComment} />
              {rootComments.map(rootComment => (
                <Comment
                  key = {rootComment.id}
                  comment= {rootComment}
                  replies={getReplies(rootComment.id)}
                  currentUserId={currentUserId}
                  deleteComment = {deleteComment}
                  updateComment = {updateComment}
                  activity={activity}
                  setActivity={setActivity}
                  addComment={addComment}
                />
              ))}
           </div>
    </div>
  );
};

export default CommentSection;

{/*// import React from "react";
// import './commentsection.scss';
// import Comment from '../comment/Comment';
// import { Container } from "react-bootstrap";
//
// // temporary comment section
// const comments = [
//         {
//             id: 1,
//             postId: 1,
//             content: "This is a test comment",
//             user: {
//                 icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
//                 username: "jsmith",
//                 firstName: "John",
//                 lastName: "Smith",
//                 flair: "student"
//             }
//         },
//         {
//             id: 2,
//             postId: 1,
//             content: "This is another test comment",
//             user: {
//                 icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
//                 username: "bgeitz",
//                 firstName: "Bob",
//                 lastName: "Geitz",
//                 flair: "professor"
//             }
//         },
// ]
//
// const CommentSection = () => {
//
//     return (
//         <div className="commentsection">
//             <Container style={{ maxWidth: 750 }}>
//                 {comments.map(comment=>(
//                     <Comment
//                         user={comment.user}
//                         postId={comment.postId}
//                         content={comment.content}
//                         key={comment.id}
//                     />
//                 ))}
//             </Container>
//         </div>
//     )
//
// }
//
// export default CommentSection */}
