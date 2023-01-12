import React from "react";
import Multiselect from 'multiselect-react-dropdown';

import './FilterSidebar.css'


class FilterSidebar extends React.Component {
    constructor() {
        super();
        this.multiselect_classes_ref = React.createRef();
        this.multiselect_date_ref = React.createRef();
      }

    state = {
        isexpanded: false,
    }

    class_filters = ['ECON 101', 'CSCI 150', 'WCRM 103', 'BIOL 100', 'STAT 113']
    date_specifiers = ['Today', 'This week', 'This month', 'This year']

    changeExpansion() {
        this.setState({ isExpanded: false });
    }

    reset_selection() {
        //resets the filters
        this.multiselect_classes_ref.current.resetSelectedValues();
    }

    get_selected_classes () {
        return this.multiselect_classes_ref.current.getSelectedItems()
    }

    get_date_specifiers() {
        return this.multiselect_date_ref.current.getSelectedItems()
    }
    render() {
        return (
            <div className="filter_sidebar">
                <h3>Class Filters</h3>
                <Multiselect
                        className="filter_sidebar_classes"
                        isObject={false}
                        options={this.class_filters}
                        onSelect={(all_items, new_item) => (console.log("Selected new class " + new_item))} // Function will trigger on select event
                        onRemove={(all_items, del_item) => (console.log("Deselected class " + del_item))} // Function will trigger on remove event
                        placeholder="Choose classes to filter"
                        displayValue="Choose classes to filter"
                        ref={this.multiselect_classes_ref}
                        hidePlaceholder={true}
                        avoidHighlightFirstOption={true}
                        emptyRecordMsg = "No class filters to select!"
                />
                <h3>Date Filters</h3>
                <Multiselect
                        className="filter_sidebar_date"
                        isObject={false}
                        options={this.date_specifiers}
                        onSelect={(all_items, new_item) => (console.log("Selected new date specifier " + new_item))} // Function will trigger on select event
                        onRemove={(all_items, del_item) => (console.log("Deselected date specifier " + del_item))} // Function will trigger on remove event
                        placeholder="Choose classes to filter"
                        displayValue="Choose classes to filter"
                        ref={this.multiselect_date_ref}
                        hidePlaceholder={true}
                        avoidHighlightFirstOption={true}
                        showCheckbox = {true}
                        selectionLimit={1}
                />
            </div>
        )
    }
}

export default FilterSidebar