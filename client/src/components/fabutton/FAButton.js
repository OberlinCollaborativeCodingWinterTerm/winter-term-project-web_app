import React from "react";
import {Container as FABContainer, Button as FABButton, darkColors, lightColors } from "react-floating-action-button";
import {FaPlus} from "react-icons/fa"; 

export default class FAButton extends React.Component{

    render() {
        return(
            <FABContainer>
                <FABButton
                    tooltip={this.props.tooltip}
                    styles={{backgroundColor: darkColors.lighterRed, color: lightColors.white}}
                    onClick={() => alert('test alert')}>
                <FaPlus/> 
                </FABButton>
            </FABContainer>
        )
    }
}
