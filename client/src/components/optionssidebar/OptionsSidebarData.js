import React from "react"
// Icons Ref: https://react-icons.github.io/react-icons/icons?name=ai
import { AiFillHome} from 'react-icons/ai';
import { AiFillQuestionCircle} from 'react-icons/ai';
import { AiOutlineUsergroupAdd} from 'react-icons/ai';
import { AiFillNotification} from 'react-icons/ai';

// Link attributes are subject to change
export const SidebarData=[
    {
        title:"Everything",
        icon: <AiFillHome />,
        link: "/viewpost"
    }, 
    {
        title:"Questions",
        icon: <AiFillQuestionCircle />, 
        link: "/viewpost"
    }, 
    {
        title:"Study Groups",
        icon:<AiOutlineUsergroupAdd />, 
        link: "/viewpost"
    },
    {
        title:"Announcements",
        icon:<AiFillNotification />, 
        link: "/"
    }, 

]