import React, { Component } from 'react';
import Feature from "./components/feature.js";
import Download from "./components/download.js";
import Footer from "./components/footer.js";
import "../framework.css";
import "./css/home.css";

class Home extends Component {


    render(){
        this.animateLogo("header.header > div.title > img");

        return ([
            <div id={"wrapper"}>
                <header className={"header"}>
                    <div className={"title"}>
                        <img alt={"logo"} src={"https://i.imgur.com/AHawQPd.png"} />
                        <h1 className={"headline"}>React components</h1>
                        <h2 className={"subtitle"}>For malextrap framework</h2>
                    </div>
                </header>

                <div id={"main"} className={"container flex-container"}>
                    <div className={"container"}>
                        <div className={"features columns"}>
                            <div className={"features-head"}>
                                <h1>Framework features <i className={"icons document"}/></h1>
                            </div>

                            <Feature
                                title={
                                    <p><i className={"icons-toggles"}/> <span>Customizable components</span></p>
                                }
                                content={
                                    "The malextrap components are very customizable and open source."
                                }
                            />
                            <Feature
                                title={
                                    <p><a className={"icons-react"}>reac</a> <span className={"no-margin"}>Reactive components</span></p>
                                }
                                content={
                                    "The malextrap components have reactive components using ReactJS framework."
                                }
                            />
                            <Feature
                                title={
                                    <p><i className={"icons-browser-upload"}/> <span>Lightweight</span></p>
                                }
                                content={
                                    "The malextrap components is lightweight framework for optimize the web balance."
                                }
                            />
                            <Feature
                                title={
                                    <p><i className={"icons-browser"}/> <span>Flexbox & Responsive</span></p>
                                }
                                content={
                                    "The malextrap components using the flexbox methods & responsive."
                                }
                            />
                        </div>
                    </div>

                    <div className={"container"}>
                        <Download />
                    </div>
                </div>
            </div>,
            <Footer/>
        ]);
    }


    /**
     * This function animate the logo
     *  @param {String} logoQuery logoQuery
     */
    animateLogo(logoQuery){
        document.addEventListener('DOMContentLoaded', e => {
            const logo = document.querySelector(logoQuery);
            setTimeout(() => logo.classList.add("bounce", "animated"), 250);
        })
    }


}

export default Home;