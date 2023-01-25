import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import { Button, Row, Col } from 'react-bootstrap';

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
        this.multiselect_date_ref.current.resetSelectedValues();
    }

    get_selected_classes () {
        return this.multiselect_classes_ref.current.getSelectedItems()
    }

    get_date_specifiers() {
        return this.multiselect_date_ref.current.getSelectedItems()
    }
    render() {
        return (
            <Col className="d-flex flex-column filtersidebar pt-3 px-4 gap-1 bg-light">
                <Row>
                    <h4 className="filterheadings">Class Filters</h4>
                </Row>
                <Row className="pb-3">
                    <Multiselect
                            className="filtersidebarcategory"
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
                </Row>
                <Row>
                    <h4 className="filterheadings">Date Filters</h4>
                </Row>
                <Row className="pb-2">
                    <Multiselect
                            className="filtersidebarcategory"
                            isObject={false}
                            options={this.date_specifiers}
                            onSelect={() => (console.log("Date specifier selected"))}// Function will trigger on select event
                            onRemove={() => (console.log("Date specifier deselected"))} // Function will trigger on remove event
                            placeholder="Choose date filter"
                            displayValue="Choose date filter"
                            ref={this.multiselect_date_ref}
                            hidePlaceholder={true}
                            avoidHighlightFirstOption={true}
                            showCheckbox = {true}
                            selectionLimit={1}
                            singleSelect={true}
                    />
                </Row>
                <Row className="filterbuttonsrow gx-3">
                    <Col>
                        <Button variant="outline-primary" size="lg" className="filterbutton w-100">Apply</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" size="lg" type="reset" className="filterbutton w-100" onClick={() => {this.reset_selection()}}>Reset</Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default FilterSidebar