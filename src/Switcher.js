import React, { Component } from 'react';
import "./framework.css";

class Switcher extends Component {


    /** EVENTS **/

    /**
     * This function handle onClick events
     * @param {*} e event
     */
    handleClick(e){
        const isChecked = e.target.checked;
        const props = this.props;

        if (!this.isNull(props.onClick))
            props.onClick(e);

        if (!this.isNull(props.onOn) && isChecked)
            props.onOn(e);

        if (!this.isNull(props.onOff) && !isChecked)
            props.onOff(e);
    }


    /** REST **/

    render(){
        const props = this.props;

        return <label className="switch" data-on={props.dataOn} data-off={props.dataOff}>
                    <input className="switch-input" onClick={e => this.handleClick(e)} type="checkbox" id="opt-in"/>
                    <span className="switch-label" data-on={props.dataOn} data-off={props.dataOff}/>
                    <span className="switch-handle"/>
                </label>;
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

export default Switcher;