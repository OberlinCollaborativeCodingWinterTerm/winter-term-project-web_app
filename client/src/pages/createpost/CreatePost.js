import './createpost.scss';

const CreatePost = () => {
    return (
        <div className="createpost">
            <div className="card">
                <div className="header">
                    <h1>New Post</h1>
                </div>
                <div className="post">
                    <div className="title">
                        <input type="text" placeholder="Enter a title for your post"/>
                    </div>
                    <div className="description">
                        <input type="text" placeholder="Enter a description for your post"/>
                    </div>
                    <div className="toolbar">
                        <form>
                            <button>Upload</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CreatePost