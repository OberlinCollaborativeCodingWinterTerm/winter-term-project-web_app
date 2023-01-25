import './viewpost.scss';
import StudyGroupPost from "../../components/post/types/StudyGroupPost";
import { Container } from 'react-bootstrap';
import CommentSection from '../../components/commentsection/CommentSection';


const testpost = {
    user: {
        icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        username: "username",
        firstName: "First",
        lastName: "Last",
        flair: "student"
    },
    course: "CSCI-151",
    title: "Announcement Title",
    description: "Announcement description text.",
    tags: ["tag1", "tag2"],
    flair: "open",
    date: "January 15, 2023",
    location: "King 101",
    members: [
        {
            icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            username: "username0",
            flair: "student"
        },
        {
            icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            username: "username1",
            flair: "student"
        },
        {
            icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            username: "username2",
            flair: "student"
        }
    ],
    feedbackContent: [
        {
            id: 1,
            postId: 1,
            content: "This is a test comment",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jsmall",
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
    
}



const ViewPost = ({post}) => {
    return (
        <div className='test'>
            <StudyGroupPost
                /*user={post.user}
                course={post.course}
                title={post.title}
                description={post.description}
                tags={post.tags}
                flair={"open"}
                date={post.date}
                location={post.location}
                members={post.members}
                limit={5}*/
            />
        </div>
    );/*(
        <div className="viewpost">
            <div className="card">
                <div className="post">
                    <div className="title">
                        <h1>Post Title</h1>
                    </div>
                    <div className="description">
                        <p>
                            Here is where the content the user posted will be. This is very descriptive. Hopefully our users will be more creative :)
                        </p>
                    </div>
                    <div className="toolbar">
                        <button>Like</button>
                    </div>

                </div>
                <div className="comments">
                    <h1>Comments</h1>
                    <form>
                        <input type="text" placeholder="say something..."/>
                        <button>Comment</button>
                    </form>
                </div>
            </div>

        </div>
    )*/
}

export {testpost, ViewPost};