import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar" style={{ width: 200}}>
                <Link to={'./'} >
                    <button>Home</button>
                </Link>
            </div>
        )
    }
}

export default Sidebar;