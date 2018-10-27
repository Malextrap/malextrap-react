import React, { Component } from 'react';
import "../../framework.css";
import "../css/home.css";
import "../css/footer.css";

class Footer extends Component {


    /** SMALL CONSTRUCTORS **/

    constructor(props, context){
        super(props, context);

        this.website = "https://framework.clonalejandro.me";
        this.github = "https://github.com/Malextrap";
        this.gitlab = "https://gitlab.com/Malextrap";
        this.twitter = "https://twitter.com/Malextrap";
        this.rss = "#";
    }


    /** REST **/

    render(){
        return <footer>
            <div className={"footer-container"}>
                <div className={"footer-body"}>
                    <p>© <strong>clonalejandro </strong>powered with <a className={"label label-rainbow no-decoration"} target={"_blank"} href={this.website}> <i className={"icons-rocket"}/> malextrap</a></p>
                    <ul>
                        <li><a className="no-decoration" href="mailto:undefined">Mail</a></li>
                        <li><a className="no-decoration" href="https://github.com/Malextrap" target="_blank">Malextrap</a></li>
                        <li><a className="no-decoration" href="/tos">Terms & License</a></li>
                    </ul>
                    <ul className={"social"}>
                        <li><a className={"pi img-replace github"} href={this.github} target={"_blank"}>Github</a></li>
                        <li><a className={"img-replace g gitlab"} href={this.gitlab} target={"_blank"}>Gitlab</a></li>
                        <li><a className={"pi img-replace twitter"} href={this.twitter} target={"_blank"}>Twitter</a></li>
                        <li><a className={"pi img-replace rss"} href={this.rss} target={"_blank"}>RSS</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    }


}

export default Footer;