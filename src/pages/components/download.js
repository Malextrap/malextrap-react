import React, { Component } from 'react';
import Button from "../../components/Button";
import "../../framework.css";
import "../css/home.css"; 

class Download extends Component {


    render(){
        return <div className={"download"}>
            <h1>Download malextrap <i className={"icons-download"}/></h1>
            <div className={"help-download"}>
                <Button animated color={"first-gradient"} text={"All framework"}/>
                <Button animated color={"teal"} text={"Components"}/>
            </div>
        </div>
    }


}

export default Download;