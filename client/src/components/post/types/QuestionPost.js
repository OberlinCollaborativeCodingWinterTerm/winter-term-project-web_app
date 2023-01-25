import Post from "../Post";
import {IoMdHelpCircle} from "react-icons/io";

export default class QuestionPost extends Post {
    constructor(props) {
        super(props, {

        });
    }

    iconDisplay(props) {
        return (
            <IoMdHelpCircle {...props} />
        )
    }

    feedbackContent(props) {
        return super.feedbackContent(props); // return answer/comment section component
    }
}