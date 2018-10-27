import React, { Component } from 'react';
import "../framework.css";

class Card extends Component {


    render(){
        const props = this.props;
        const space = " ";
        const hrefSvg = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjYyNiA1MTEuNjI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuNjI2IDUxMS42Mjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzkyLjg1NywyOTIuMzU0aC0xOC4yNzRjLTIuNjY5LDAtNC44NTksMC44NTUtNi41NjMsMi41NzNjLTEuNzE4LDEuNzA4LTIuNTczLDMuODk3LTIuNTczLDYuNTYzdjkxLjM2MSAgICBjMCwxMi41NjMtNC40NywyMy4zMTUtMTMuNDE1LDMyLjI2MmMtOC45NDUsOC45NDUtMTkuNzAxLDEzLjQxNC0zMi4yNjQsMTMuNDE0SDgyLjIyNGMtMTIuNTYyLDAtMjMuMzE3LTQuNDY5LTMyLjI2NC0xMy40MTQgICAgYy04Ljk0NS04Ljk0Ni0xMy40MTctMTkuNjk4LTEzLjQxNy0zMi4yNjJWMTU1LjMxYzAtMTIuNTYyLDQuNDcxLTIzLjMxMywxMy40MTctMzIuMjU5YzguOTQ3LTguOTQ3LDE5LjcwMi0xMy40MTgsMzIuMjY0LTEzLjQxOCAgICBoMjAwLjk5NGMyLjY2OSwwLDQuODU5LTAuODU5LDYuNTctMi41N2MxLjcxMS0xLjcxMywyLjU2Ni0zLjksMi41NjYtNi41NjdWODIuMjIxYzAtMi42NjItMC44NTUtNC44NTMtMi41NjYtNi41NjMgICAgYy0xLjcxMS0xLjcxMy0zLjkwMS0yLjU2OC02LjU3LTIuNTY4SDgyLjIyNGMtMjIuNjQ4LDAtNDIuMDE2LDguMDQyLTU4LjEwMiwyNC4xMjVDOC4wNDIsMTEzLjI5NywwLDEzMi42NjUsMCwxNTUuMzEzdjIzNy41NDIgICAgYzAsMjIuNjQ3LDguMDQyLDQyLjAxOCwyNC4xMjMsNTguMDk1YzE2LjA4NiwxNi4wODQsMzUuNDU0LDI0LjEzLDU4LjEwMiwyNC4xM2gyMzcuNTQzYzIyLjY0NywwLDQyLjAxNy04LjA0Niw1OC4xMDEtMjQuMTMgICAgYzE2LjA4NS0xNi4wNzcsMjQuMTI3LTM1LjQ0NywyNC4xMjctNTguMDk1di05MS4zNThjMC0yLjY2OS0wLjg1Ni00Ljg1OS0yLjU3NC02LjU3ICAgIEMzOTcuNzA5LDI5My4yMDksMzk1LjUxOSwyOTIuMzU0LDM5Mi44NTcsMjkyLjM1NHoiIGZpbGw9IiM3OTUwZjIiLz4KCQk8cGF0aCBkPSJNNTA2LjE5OSw0MS45NzFjLTMuNjE3LTMuNjE3LTcuOTA1LTUuNDI0LTEyLjg1LTUuNDI0SDM0Ny4xNzFjLTQuOTQ4LDAtOS4yMzMsMS44MDctMTIuODQ3LDUuNDI0ICAgIGMtMy42MTcsMy42MTUtNS40MjgsNy44OTgtNS40MjgsMTIuODQ3czEuODExLDkuMjMzLDUuNDI4LDEyLjg1bDUwLjI0Nyw1MC4yNDhMMTk4LjQyNCwzMDQuMDY3ICAgIGMtMS45MDYsMS45MDMtMi44NTYsNC4wOTMtMi44NTYsNi41NjNjMCwyLjQ3OSwwLjk1Myw0LjY2OCwyLjg1Niw2LjU3MWwzMi41NDgsMzIuNTQ0YzEuOTAzLDEuOTAzLDQuMDkzLDIuODUyLDYuNTY3LDIuODUyICAgIHM0LjY2NS0wLjk0OCw2LjU2Ny0yLjg1MmwxODYuMTQ4LTE4Ni4xNDhsNTAuMjUxLDUwLjI0OGMzLjYxNCwzLjYxNyw3Ljg5OCw1LjQyNiwxMi44NDcsNS40MjZzOS4yMzMtMS44MDksMTIuODUxLTUuNDI2ICAgIGMzLjYxNy0zLjYxNiw1LjQyNC03Ljg5OCw1LjQyNC0xMi44NDdWNTQuODE4QzUxMS42MjYsNDkuODY2LDUwOS44MTMsNDUuNTg2LDUwNi4xOTksNDEuOTcxeiIgZmlsbD0iIzc5NTBmMiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
        const css = !this.isNull(props.image) ? {backgroundImage: props.image} : undefined;
        const href = !this.isNull(props.href) ? <a href={props.href} className={"external"}><img src={hrefSvg} alt={"redirector"}/></a> : undefined;

        return <div className="card-link">
            <div className={"card card-shadow" + space + "card-" + props.color} style={css}>
                <div className="filter">
                    {href}
                    <h3 className="is-text">{props.f[0]}</h3>
                    <p className="title is-text">{props.f[1]}</p>
                    <div className="card-body">
                        <h3 className="is-text">{props.f[2]}</h3>
                        <p className="description is-text">{props.f[3]}</p>
                    </div>
                    <div className="card-footer">
                        <h3 className="is-text">{props.f[4]}</h3>
                        <p className="date is-text">{props.f[5]}</p>
                    </div>
                </div>
            </div>
        </div>
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

export default Card;