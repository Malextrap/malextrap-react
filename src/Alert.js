import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import "./framework.css";

class Alert extends Component {


    /** SMALL CONSTRUCTORS **/

    constructor(props, context){
        super(props, context);

        this.css = {
            opacity: 1,
            WebkitTransition: "opacity 250ms linear",
            transition: "opacity 250ms linear"
        };
    }


    /** REST **/

    render(){
        if (this.props.fade) this.fade(this.props.timeout);

        return <div className={"alert top " + this.props.color} style={this.css}>
            <div className={"content"}>{this.props.content}</div>
            <a className={"closer"} onClick={() => this.fade(0)}/>
        </div>;
    }


    /**
     * This function fade the alert
     * @param {Number} timeout timeout
     */
    fade(timeout = 2500){
        setTimeout(() => {
            const element = ReactDOM.findDOMNode(this);

            if (!this.isNull(this.props.onClose))
                this.props.onClose({
                    node: element,
                    component: this
                });

            this.animation(element, () => {
                element.style.display = "none";
            })
        }, timeout)
    }


    /**
     * This function create a fade animation
     * @param {*} element element
     * @param {*} onEnd onEnd
     */
    animation(element, onEnd){
        element.style.opacity = '0';
        setTimeout(onEnd, 1000);
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

export default Alert;