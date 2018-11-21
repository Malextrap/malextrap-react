import React, { Component } from 'react';
import "./framework.css";

class Label extends Component {


    /** REST **/

    render(){
        const props = this.props;
        return <label className={"label " + props.color}>{props.text}</label>
    }
}

export default Label;