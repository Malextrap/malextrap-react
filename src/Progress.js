import React, { Component } from 'react';
import "./framework.css";

class Progress extends Component {


    /** REST **/
    
    render(){
        const props = {
            percent: this.props.percent,
            max: !this.isNull(this.props.max) ? this.props.max : 100,
            min: !this.isNull(this.props.min) ? this.props.min : 0,
            current: !this.isNull(this.props.current) ? this.props.current : 0,
            color: !this.isNull(this.props.color) ? this.props.color : "#5A94E0"
        };

        const prompt = this.props.percent ? "%" : "";

        return <div className={"progress"} data-max={props.max} data-min={props.min} data-current={props.current} data-color={props.color}>
            <div className="progress-number" aria-valuenow={props.current + prompt} style={{left: props.current + "%"}}/>
            <div className="progress-rounded">
                <div className="progress-bar"
                     style={{width: props.current + "%", backgroundColor: props.color}}
                     aria-valuenow={props.current + prompt}
                     aria-valuemin={props.min + prompt}
                     aria-valuemax={props.max + prompt}/>
            </div>
        </div>
    }


    /**
     * This function check if data is null
     * @param {*} data data
     * @returns {Boolean} isNull
     */
    isNull(data){
        return data === undefined
    }


}

export default Progress;