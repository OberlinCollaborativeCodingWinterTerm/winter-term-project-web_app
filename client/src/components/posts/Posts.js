import { Container } from 'react-bootstrap';
import './posts.scss';
import AnnouncementPost from "../post/types/AnnouncementPost";

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
            id: 1,
            course: "CSCI275",
            title: "Really though, what IS an Abstraction?",
            desc: "This is a test post",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "bgeitz",
                firstName: "Bob",
                lastName: "Geitz",
                flair: "student"
            }
        },
        {
            id: 2,
            course: "CHIN101",
            title: "Cool Website for Translating Texts",
            desc: "This is another test post",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jsmith",
                firstName: "John",
                lastName: "Smith",
                flair: "student"
            }
        },
        {
            id: 3,
            course: "ECON101",
            title: "Supply/Demand Thread",
            desc: "This is third test post",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jdoe",
                firstName: "Jane",
                lastName: "Doe",
                flair: "student"
            }
        },
        {
            id: 4,
            course: "CSCI150",
            title: "Project-Sharing Thread",
            desc: "This is not a third test post",
            user: {
                icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                username: "jsmith",
                firstName: "John",
                lastName: "Smith",
                flair: "student"
            }
        },

    ]

    return (
        <div className="posts">

            <Container style={{ maxWidth: 750 }}>
                {posts.map(post=>(
                    <AnnouncementPost
                        user={post.user}
                        classId={post.course}
                        title={post.title}
                        description={post.desc}
                        tags={["tag1", "tag2"]}
                        flair="open"
                        key={post.id}
                        preview
                     />
                ))}
            </Container>
        </div>
    )
    
}

export default Posts; 