import React, { Component } from 'react';
import "../framework.css";

class Button extends Component {


    /** EVENTS **/

    /**
     * This function handle onClick event
     * @param {*} e event
     */
    handleClick(e){
        if (!this.isNull(this.props.onClick))
            this.props.onClick(e);
    }


    /** REST **/

    render(){
        const props = this.props;
        const space = " ";
        const properties = {
            color: (!this.isNull(props.color) ? props.color : "") + space,
            text: (!this.isNull(props.text) ? props.text : "") + space,
            animated: (props.animated ? "animated" : "") + space
        };

        return <button onClick={e => this.handleClick(e)} className={"btn" + space + properties.animated + properties.color}>
                    {properties.text}
                </button>;
    }


    /**
     * This function check if data is null
     * @param {*} data data
     * @returns {Boolean} isNull
     */
    isNull(data){
        return data === undefined;
    }


}

export default Button;