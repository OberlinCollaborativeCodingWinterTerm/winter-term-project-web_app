import React from "react";
import FilterSidebar from "../filtersidebar/FilterSidebar";
import {OptionsSidebar} from "../optionssidebar/OptionsSidebar";

class Sidebar extends React.Component {
    render() {
        return (
            <div className={"d-flex flex-column " + this.props.className}>
                <OptionsSidebar />
                <FilterSidebar />
            </div>
        )
    }
}

export default Sidebar;