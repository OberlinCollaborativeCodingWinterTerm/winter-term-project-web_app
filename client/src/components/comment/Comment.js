import React from "react";
import { Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './comment.scss';
import NewComment from "../newcomment/NewComment";

const Comment = ({comment, replies, setActivity, activity, updateComment, deleteComment, addComment,parentCommentId = null,currentUserId}) => {

  const canReply = Boolean(currentUserId);  //whatDoesThisMean?
  //can only edit or delete if you're the one who posted!
  const canEdit = currentUserId === comment.userId;
  const canDelete = currentUserId === comment.userId;
  //for UI friendly date
  /*const createdAt = new Date(comment.createdAt).toLocaleDateString();  //export?*/

  const isReplying =
    activity &&
    activity.type === "replying" &&
    activity.id === comment.id;

  const isEditing =
    activity &&
    activity.type === "editing" &&
    activity.id === comment.id;

  const replyId = parentCommentId ? parentCommentId : comment.id;

  return (
    <div key={comment.id} >
      <Container className="container-md bg-white p-4">
        <div>
          {comment.username}
        </div>
        {!isEditing && <div>{comment.content}</div>}
        {isEditing && (
          <NewComment
            submitLabel="Done"
            hasCancelButton
            initialText={comment.content}
            handleSubmit={(inputText)=> updateComment(inputText, comment.id)}
            handleCancel={()=> setActivity(null)}
          />
        )}
        <div className="comment-action">
          {canReply && (<div onClick={()=>setActivity({id: comment.id, type: "replying"})
          }>Reply</div>)}

          {canEdit && (<div onClick={()=>setActivity({id: comment.id, type: "editing"})
          }>Edit</div>)}

          {canDelete && <div onClick={()=> deleteComment(comment.id)}> Delete </div> }
        </div>

        {isReplying && (
          <NewComment
            submitLabel="Reply"
            handleSubmit={(inputText) => addComment(inputText, replyId)}/>
        )}

        {(replies.length) > 0 && (

          <div>
            {replies.map(reply => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                updateComment={updateComment}
                parentCommentId={comment.id}
                activity={activity}
                setActivity={setActivity}
                addComment={addComment}/>
              ))}
          </div>
        )}

      </Container>
    </div>
    // <div>
    //   <small>
    //    <img alt="" src={comment.icon} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  />
    //    <span className="px-1">
    //      <Link to={"/profile/" + comment.username}>{comment.username}</Link>
    //    </span>
    //    <Badge pill bg="primary">STUDENT</Badge>
    //    <span>{comment.createdAt}</span>
    //   </small>
    //   <div>{comment.content}</div>
    // </div>
  );
};

export default Comment;

// export default class Comment extends React.Component {
//     render() {
//         return (
//             <Container className="">
//                 <p className="mb-1 text-secondary">
//                   <small>
//                     <img alt="" src={this.props.user.icon} style={{ width: '1.5em', height: '1.5em' }} className="rounded-circle"  />
//                     <span className="px-1">
//                       <Link to={"/profile/" + this.props.user.id}>{this.props.user.username}</Link>
//                     </span>
//                     <Badge pill bg="primary">STUDENT</Badge>
//                   </small>
//                 </p>
//                 <span>
//                     {this.props.content}
//                 </span>
//             </Container>
//         )
//     }
// }

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

        FROM Monsterlessons Academy Tutorial Video:
        https://www.youtube.com/watch?v=sjAeLwuezxo

        [
        {
        id: "1 ",
        content: "Comment here!",
        username: "John",
        userId: "1",
        parentCommentId: null,     //Not a reply
        createdAt: "2023-01-12"
        },
        {
        id: "2",
        content: "Replay!",
        username: "Tom",
        userId: "2",
        parentCommentId: "1",  //Replied to comment "1"
        createdAt: "2023-01-12"
        },
        ]

*/
