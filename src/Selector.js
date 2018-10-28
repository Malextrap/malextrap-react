import React, { Component } from 'react';
import "./framework.css";

class Selector extends Component {


    /** SMALL CONSTRUCTORS **/

    constructor(props, context){
        super(props, context);

        this.colors = {
            "primary": "#5A94E0",
            "secondary": "#F3F4F8",
            "terciary": "#CED2D9",
            "gray": "#7A8599",
            "dark": "#353D4C",
            "pure_white": "#FFFFFF",
            "blue": "#4595E6",
            "cyan": "#22B8CF",
            "emerald": "#2ECC71",
            "green": "#5FB335",
            "salmon": "#FA5252",
            "red": "#F03E3E",
            "pink": "#E64980",
            "grape": "#BE4BDB",
            "violet": "#7950F2",
            "yellow": "#FCC419",
            "orange": "#FD7E14",
            "teal": "#12B886"
        };

        this.css = {
            background: (!this.isNull(this.colors[props.color]) ? this.colors[props.color] : this.colors["dark"]) + " url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiIKICAgaWQ9InN2ZzI5ODkiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHdpZHRoPSIxMDAlIgogICBoZWlnaHQ9IjEwMCUiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFuZ2xlX2Rvd25fZm9udF9hd2Vzb21lLnN2ZyI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMjk5OSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczI5OTciIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI2NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNDgwIgogICAgIGlkPSJuYW1lZHZpZXcyOTk1IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjEzMTY5NjQzIgogICAgIGlua3NjYXBlOmN4PSI4OTYiCiAgICAgaW5rc2NhcGU6Y3k9Ijg5NiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyOTg5IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMjg4LjU0MjM4LDEyNTUuMDUwOCkiCiAgICAgaWQ9ImcyOTkxIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEwNzUsODAwIHEgMCwtMTMgLTEwLC0yMyBMIDU5OSwzMTEgcSAtMTAsLTEwIC0yMywtMTAgLTEzLDAgLTIzLDEwIEwgODcsNzc3IHEgLTEwLDEwIC0xMCwyMyAwLDEzIDEwLDIzIGwgNTAsNTAgcSAxMCwxMCAyMywxMCAxMywwIDIzLC0xMCBMIDU3Niw0ODAgOTY5LDg3MyBxIDEwLDEwIDIzLDEwIDEzLDAgMjMsLTEwIGwgNTAsLTUwIHEgMTAsLTEwIDEwLC0yMyB6IgogICAgICAgaWQ9InBhdGgyOTkzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHN0eWxlPSJmaWxsOiAjZmZmZmZmIiAvPgogIDwvZz4KPC9zdmc+Cg==) no-repeat scroll 90%",
            backgroundSize: "20%"
        };
    }


    /** EVENTS **/

    /**
     * This function handle onChange event
     * @param {*} e event
     */
    handleChange(e){
        if (!this.isNull(this.props.onChange))
            this.props.onChange(e);
    }


    /** REST **/

    render(){
        return <select onChange={e => this.handleChange(e)} style={this.css}>{this.getOptions(this.props)}</select>
    }


    /** OTHERS **/

    /**
     * This function build and return the options for select
     * @param {*} props props
     * @returns {Array}
     */
    getOptions(props){
        const options = [];
        props.options.map((e, i) => options.push(<option key={i}>{e}</option>));
        return options;
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

export default Selector;