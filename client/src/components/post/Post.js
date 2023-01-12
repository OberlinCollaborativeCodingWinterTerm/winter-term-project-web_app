import { Link } from 'react-router-dom'
import './post.scss'

import {Card} from 'react-bootstrap';

const Post = ({post}) => {
    return (
        <div className="post">
            <div className='container'>
                <Card >
                    <Card.Header>
                        <div className='user'>
                            <div className='userInfo'></div>
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt='' className="rounded-circle my-auto" width="32" height="32" />
                                <div className='details'>
                                    <Link to={'./profile/' + post.userId} >
                                        <span>{post.name}</span>
                                    </Link>
                                    <span className='date'> 1 min ago, to </span>
                                    <Link to={'./courses/course/' + post.course}>
                                        <span className='course'>{post.course}</span>
                                    </Link>
                                </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className='content'>
                            <span>
                                {post.desc}
                            </span>
                        </div>
                        <div className='info'></div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Post