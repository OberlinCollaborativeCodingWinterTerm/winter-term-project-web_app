import React from 'react';
import "./home.scss";

import {Options_sidebar} from "../../components/optionssidebar/Options_sidebar";
import AnnouncementPreviewPost from '../../components/postpreview/types/AnnouncementPreviewPost';

const Home = () => {
    return (
        <div className="home">
            <Options_sidebar /> 
            <AnnouncementPreviewPost 
            userIcon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" 
            classId="CSCI-151" 
            title="Sample Title" 
            description="Sample description text."
            tags={["tag1", "tag2"]} />

        </div>
    ); 
}; 

export default Home; 