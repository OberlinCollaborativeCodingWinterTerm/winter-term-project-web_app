import { Container } from 'react-bootstrap';
import Post from '../post/Post';
import AnnouncementPostPreview from '../postpreview/types/AnnouncementPreviewPost';
import './posts.scss';

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
            author: "Bob Geitz",
            userId: 1,
            course: "CSCI275",
            title: "Really though, what IS an Abstraction?",
            desc: "This is a test post",
            profilePic: <img alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="rounded-circle my-auto" width="32" height="32" />
        },
        {
            id: 2,
            author: "John Smith",
            userId: 2, 
            course: "CHIN101",
            title: "Cool Website for Translating Texts",
            desc: "This is another test post"
        },
        {
            id: 3,
            author: "Jane Doe",
            userId: 3,
            course: "ECON101",
            title: "Supply/Demand Thread",
            desc: "This is third test post"
        },
        {
            id: 4,
            author: "John Smith",
            userId: 2,
            course: "CSCI150",
            title: "Project-Sharing Thread",
            desc: "This is not a third test post"
        },

    ]

    return (
        <div className="posts">
            {posts.map(post=>(
                <Container className="pt-5" style={{ maxWidth: 750 }}>
                    <AnnouncementPostPreview post={post} key={post.id} 
                        userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        userName={post.author}
                        userId={post.userId}
                        classId={post.course}
                        title={post.title}
                        description={post.desc}
                        tags={["tag1", "tag2"]}/>
                </Container>
                
            ))}
        </div>
    )
    
}

export default Posts; 