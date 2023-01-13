import React from "react";
import "./OptionsSidebar.css";
import { SidebarData } from "./OptionsSidebarData";



export class OptionsSidebar extends React.Component {
  render(){
    return (
      <div className="Options_sidebar">
        <ul className="Options_sidebarList">
        {SidebarData.map((val, key)=>{
        return (
          <li className="row" key={key} onClick={()=> {window.location.pathname=val.link}}>
          <div id="icon">{val.icon}</div>{" "} 
          <div id="title">{val.title}</div>{" "}
          </li>
          );
        })}
        </ul>
      </div>
      ); 
  }
 
}

  
