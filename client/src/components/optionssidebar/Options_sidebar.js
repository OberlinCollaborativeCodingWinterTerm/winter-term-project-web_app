import React from "react";
import "./Options_sidebar.css";
import { SidebarData } from "./Options_sidebarData";

// TODO: Add the icons to <div>{val.icon} through Material Icon latter

export class Options_sidebar extends React.Component {
  render(){
    return (
      <div className="Options_sidebar">
        <ul className="Options_sidebarList">
        {SidebarData.map((val, key)=>{
        return (
          <li className="row" key={key} onClick={()=> {window.location.pathname=val.link}}>
          {/* <div>{val.icon}</div>{" "} */}
          
          <div>{val.title}</div>{" "}
          </li>
          );
        })}
        </ul>
      </div>
      ); 
  }
 
}

  
