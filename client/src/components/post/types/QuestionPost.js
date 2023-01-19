import Post from "../Post";
import {AiFillQuestionCircle} from "react-icons/ai";

export default class QuestionPost extends Post {
    constructor(props) {
        super(props, {

        });
    }

    iconDisplay(props) {
        return (
            <AiFillQuestionCircle {...props} />
        )
    }

    feedbackContent(props) {
        return super.feedbackContent(props); // return answer/comment section component
    }
}