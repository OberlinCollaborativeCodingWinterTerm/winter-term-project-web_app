import { Container } from 'react-bootstrap';
import './posts.scss';
import AnnouncementPost from "../post/types/AnnouncementPost";
import QuestionPost from "../post/types/QuestionPost";
import StudyGroupPost from "../post/types/StudyGroupPost";

/*
<AnnouncementPreviewPost
                    userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    userName="Bob Geitz"
                    classId="CSCI-151"
                    title="Sample Title"
                    description="Sample description text."
                    tags={["tag1", "tag2"]} />

*/

const Posts = () => {
    // temporary array of "posts"
    // NOTE: "author" will not be defined here... use a table for user info based on userId
    const posts = [
        {
            type: "question",
            id: 1,
            course: "CSCI275",
            title: "Really though, what IS an Abstraction?",
            desc: "This is a test post",
            flair: "open",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "bgeitz",
                firstName: "Bob",
                lastName: "Geitz",
                flair: "student"
            }
        },
        {
            type: "announcement",
            id: 2,
            course: "CHIN101",
            title: "Cool Website for Translating Texts",
            desc: "This is another test post",
            flair: "",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jsmith",
                firstName: "John",
                lastName: "Smith",
                flair: "student"
            }
        },
        {
            type: "question",
            id: 3,
            course: "ECON101",
            title: "Supply/Demand Thread",
            desc: "This is third test post",
            flair: "resolved",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jdoe",
                firstName: "Jane",
                lastName: "Doe",
                flair: "student"
            }
        },
        {
            type: "group",
            id: 4,
            course: "CSCI150",
            title: "Project Study Group",
            desc: "This is not a third test post",
            flair: "full",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jsmith",
                firstName: "John",
                lastName: "Smith",
                flair: "student"
            },
            date: "January 15, 2023",
            location: "King 101",
            members: [
                {
                    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    username: "username1",
                    flair: "student"
                },
                {
                    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    username: "username2",
                    flair: "student"
                },
                {
                    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    username: "username3",
                    flair: "student"
                }
            ],
            limit: 3
        },
        {
            type: "group",
            id: 5,
            course: "ECON101",
            title: "Midterm Study Session",
            desc: "Study session test post",
            flair: "open",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jdoe",
                firstName: "Jane",
                lastName: "Doe",
                flair: "student"
            },
            date: "October 20, 2023",
            location: "Mudd 108",
            members: [
                {
                    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    username: "username1",
                    flair: "student"
                },
                {
                    icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    username: "username2",
                    flair: "student"
                },
            ],
            limit: 6
        }

    ]

    return (
        <div className="posts">

            <Container style={{ maxWidth: 750 }}>
                {posts.map(post=>{
                    let PostType;
                    switch (post.type) {
                        case "question":
                            PostType = QuestionPost;
                            break;
                        case "group":
                            PostType = StudyGroupPost;
                            break;
                        case "announcement":
                        default:
                            PostType = AnnouncementPost;
                            break;
                    }
                    return (<PostType
                            user={post.user}
                            course={post.course}
                            title={post.title}
                            description={post.desc}
                            tags={["tag1", "tag2"]}
                            flair={post.flair}
                            key={post.id}
                            postId={post.id}
                            date={post.date}
                            location={post.location}
                            members={post.members}
                            limit={post.limit}
                            preview
                         />
                )})}
            </Container>
        </div>
    )
    
}

export default Posts; 