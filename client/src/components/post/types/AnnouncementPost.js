import Post from "../Post";
import {AiFillNotification} from "react-icons/ai";

export default class AnnouncementPost extends Post {
    constructor(props) {
        super(props, {

        });
    }

    iconDisplay(props) {
        return (
            <AiFillNotification {...props} />
        )
    }

    feedbackContent(props) {
        return super.feedbackContent(props); // return comment section component
    }
}