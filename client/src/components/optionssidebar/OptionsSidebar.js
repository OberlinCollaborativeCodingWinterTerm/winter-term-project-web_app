import React from "react";
import "./OptionsSidebar.scss";
import { SidebarData } from "./OptionsSidebarData";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import {LinkContainer} from "react-router-bootstrap";


export class OptionsSidebar extends React.Component {
    render(){
        return (
            <SidebarMenu bg="primary" className="py-1" expand={false}>
                <SidebarMenu.Body className="p-0 w-100">
                    <SidebarMenu.Nav>
                        {SidebarData.map((val, key) => (
                            <LinkContainer to={val.link} key={key}>
                                <SidebarMenu.Nav.Link className="d-flex align-items-center px-4 py-2">
                                    <SidebarMenu.Nav.Icon className="d-flex align-items-center">
                                        <val.icon style={{width: "1.5em", height: "1.5em"}} />
                                    </SidebarMenu.Nav.Icon>
                                    <SidebarMenu.Nav.Title style={{fontSize: "0.95em"}}>
                                        {val.title}
                                    </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </LinkContainer>
                        ))}
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
            </SidebarMenu>
            /*<div className="Options_sidebar">
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
            </div>*/
        );
    }

}

  
