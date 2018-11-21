import React, { Component } from 'react';
import "./framework.css";

class Tooltip extends Component {


    /** REST **/

    render(){
        const props = this.props;

        return <div className="tooltip">
            {props.text}
            <span className="tooltip-text">{props.hidden}</span>
        </div>
    }
}

export default Tooltip;