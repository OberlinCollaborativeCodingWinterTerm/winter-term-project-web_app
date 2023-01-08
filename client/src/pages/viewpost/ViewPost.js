import './viewpost.scss';

const ViewPost = () => {
    return (
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
    )
}

export default ViewPost