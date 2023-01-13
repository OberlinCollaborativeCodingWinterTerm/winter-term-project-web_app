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
    const posts = [
        {
            id: 1,
            name: "Bob Geitz",
            userId: 1,
            course: "CSCI275",
            desc: "This is a test post",
            profilePic: <img alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="rounded-circle my-auto" width="32" height="32" />
        },
        {
            id: 2,
            name: "John Smith",
            userId: 2, 
            course: "CHIN101",
            desc: "This is another test post"
        },
        {
            id: 3,
            name: "Jane Doe",
            userId: 3,
            course: "ECON101",
            desc: "This is third test post"
        },
        {
            id: 4,
            name: "John Smith",
            userId: 2,
            course: "CSCI150",
            desc: "This is not a third test post"
        },

    ]

    return (
        <div className="posts">
            {posts.map(post=>(
                <Container className="pt-5" style={{ maxWidth: 750 }}>
                    <AnnouncementPostPreview post={post} key={post.id} 
                        userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        userName={post.userName}
                        classId={post.course}
                        title="Sample Title"
                        description={post.desc}
                        tags={["tag1", "tag2"]}/>
                </Container>
                
            ))}
        </div>
    )
    
}

export default Posts; 