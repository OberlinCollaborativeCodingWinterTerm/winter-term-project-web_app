import React from "react"
// Icons Ref: https://react-icons.github.io/react-icons/icons?name=ai
import {IoMdHome, IoMdHelpCircle, IoMdPeople, IoMdAlert} from 'react-icons/io';

// Link attributes are subject to change
export const SidebarData=[
    {
        title:"Everything",
        icon: IoMdHome,
        link: "/"
    }, 
    {
        title:"Questions",
        icon: IoMdHelpCircle,
        link: "/questions"
    }, 
    {
        title:"Study Groups",
        icon: IoMdPeople,
        link: "/groups"
    },
    {
        title:"Announcements",
        icon: IoMdAlert,
        link: "/announcements"
    }, 

]