import React, { useEffect, useState } from "react";
//import './Filter_sidebar.css'

//class_filters = ['CS150', 'ECON101']


class Filter_sidebar extends React.Component {
    state = {
        isexpanded: false,
    }

    changeExpansion() {
        this.setState({ isExpanded: False });
    }

    render() {
        return (
            <div className="filter_sidebar" style={{ width: isExpanded === true ? 200 : 50 }}>
                    <button onClick={() => changeExpansion()}></button>
            </div>
        )
    }
}

export default Filter_sidebar