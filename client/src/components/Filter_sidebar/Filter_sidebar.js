import React, { useEffect, useState } from "react";
//import './Filter_sidebar.css'

//class_filters = ['CS150', 'ECON101']


class Filter_sidebar extends React.Component {
    state = {
        isexpanded: false,
    }

    changeExpansion() {
        this.setState({ isExpanded: false });
    }

    render() {
        return (
            <div className="filter_sidebar" style={{ width: this.isExpanded === true ? 200 : 50 }}>
                    <button onClick={() => this.changeExpansion()}></button>
            </div>
        )
    }
}

export default Filter_sidebar