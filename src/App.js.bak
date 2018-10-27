import React, { Component } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Switcher from "./components/Switcher";
import Selector from "./components/Selector";
import Alert from "./components/Alert";
import Modal from "./components/Modal";

class App extends Component {


    render() {
        return ([
            <Modal content={<p>Test asdsdasd</p>} ref={node => {this.modal = node}} />,
            <Alert color={"info"} content={
                <a href="https://malextrap.github.io">
                    <img src="https://clonalejandro.github.io/cdn/clona.svg" alt="clonalejandro, Malextrap framework"/>
                    Malextrap, Framework based on flexbox
                </a>
            }/>,
            <Button animated onClick={e => {this.modal.open()}} color="blue"  text="Open modal!"/>,
            <Card color="blue" href={"#"} f={[
                "Title", "Card test", "Description", "Hello world!", "Date", new Date().toDateString()
            ]}/>,
            <Switcher dataOn={"On"} dataOff={"Off"}/>,
            <Selector options={["Alex", "Anna", "Pepe"]}/>
        ]);
    }


}

export default App;
