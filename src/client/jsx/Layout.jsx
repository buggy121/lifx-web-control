import React from 'react';
import {connect} from 'react-redux';

class Layout extends React.Component {
    render() {
        var main = this.props.main;
        return (
            <html>
            <head>
                <title>{main.title}</title>
            </head>
            <body>
            <div className="container-fluid">
                {this.props.children}
            </div>
            <script src="/client.js"/>
            </body>
            </html>
        );
    }
}

var wrapper = connect(
    function (store) {
        return {
            main: store.main
        }
    }
)

export default wrapper(Layout);