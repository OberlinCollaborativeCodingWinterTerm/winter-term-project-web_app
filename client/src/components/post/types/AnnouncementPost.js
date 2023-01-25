import Post from "../Post";
import {IoMdAlert} from "react-icons/io";

export default class AnnouncementPost extends Post {
    constructor(props) {
        super(props, {

        });
    }

    iconDisplay(props) {
        return (
            <IoMdAlert {...props} />
        )
    }

    feedbackContent(props) {
        return super.feedbackContent(props); // return comment section component
    }
}