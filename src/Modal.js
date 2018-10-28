import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import "./framework.css";

class Modal extends Component {


    /** SMALL CONSTRUCTORS **/

    constructor(props, context){
        super(props, context);

        this.isOpen = false;
        setTimeout(() => {
            this.closeEvent();
            if (this.props.clickLeft) this.onClickLeft();
        }, 250);
    }


    /** REST **/

    render(){
        const props = this.props;

        return <div className={"modal " + (props.big ? "big" : "")}>
            <div className={"modal-container"}>
                {props.content}
                <a className="no-decoration modal-close img-replace"/>
            </div>
        </div>
    }


    /**
     * This function open the modal
     */
    open(){
        const element = ReactDOM.findDOMNode(this);
        const currentClass = element.getAttribute("class");

        this.isOpen = true;
        this.openEvent();

        element.setAttribute("class", currentClass + " is-visible");
    }


    /**
     * This function close the modal
     */
    close(){
        const element = ReactDOM.findDOMNode(this);
        const currentClass = element.getAttribute("class");

        this.isOpen = false;
        element.setAttribute("class", currentClass.replace("is-visible", ""));
    }


    /** EVENTS **/

    openEvent(){
        const event = {
            React: this,
            Element: ReactDOM.findDOMNode(this)
        };

        if (!this.isNull(this.props.onOpen)) this.props.onOpen(event);
    }


    closeEvent(){
        const event = {
            React: this,
            Element: ReactDOM.findDOMNode(this)
        };

        document.querySelector(".modal-close").addEventListener("click", () => {
            if (!this.isNull(this.props.onClose)) this.props.onClose(event);
            this.close()
        })
    }


    onClickLeft(){
        const element = ReactDOM.findDOMNode(this);

        document.addEventListener("click", e => {
            if (e.target === element) this.close();
        })
    }


    /** OTHERS **/

    /**
     * This function check if data is null
     * @param {*} data data
     * @returns {Boolean} isNull
     */
    isNull(data){
        return data === undefined;
    }


}

export default Modal;