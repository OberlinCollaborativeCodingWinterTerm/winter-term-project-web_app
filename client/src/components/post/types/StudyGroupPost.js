import Post from "../Post";
import {IoMdPeople} from "react-icons/io";
import {IoMdCalendar} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import {Button} from "react-bootstrap";

export default class StudyGroupPost extends Post {
    constructor(props) {
        super(props, {
            joined: !!(props.joined),
            grayed: props.flair === "full"
        });
        this.GroupPreview = this.GroupPreview.bind(this);
    }

    iconDisplay(props) {
        return (
            <IoMdPeople {...props} />
        )
    }

    postContent(props) {
        let data = props.postDetails.groupData;
        return (
            <>
                <span className={`${this.state.grayed ? "text-quaternary" : "text-tertiary"} d-flex align-items-center gap-1`}><IoMdCalendar size="1.25em" /><span>{data.date}</span><strong className="px-1">&middot;</strong><MdLocationOn size="1.25em" /><span>{data.location}</span></span>
                <this.GroupPreview {...props} />
            </>
        );
    }

    GroupPreview(props) {
        let data = props.postDetails.groupData;
        return (
            <div className="d-flex align-items-center mt-3 mb-1" style={{ fontSize : "1.1em" }}>
                <div className="d-flex me-3 align-items-center">
                    {
                        data.members.map(user => {
                            return (
                                <img key={user._id} alt={user.firstName + " " + user.lastName} src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} className="rounded-circle border-3 border-white me-n3" style={{ width: "1.75em", height: "1.75em", borderStyle: "solid" }} />
                            )
                        })
                    }
                </div>
                <span className={`${this.state.grayed ? "text-quaternary" : "text-tertiary"} px-1`}>{data.members.length}/{data.maximum} spots taken</span>
                {(data.members.length < data.maximum || this.state.joined) && <Button onClick={() => {
                    if (!this.state.joined && !this.state.preview) {
                        data.members.push({
                            icon: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                            username: "username",
                            flair: "student"
                        });
                        // logic for actually joining a group (backend link)
                        this.setState({joined: true});
                    }
                }
                } variant="success" className="rounded-pill px-3 py-1 mx-1 mb-0" disabled={this.state.joined}>{this.state.joined ? "Joined" : "Join"}</Button>}
            </div>
        );
    }
}