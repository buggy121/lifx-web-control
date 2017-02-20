import React from 'react';

class Layout extends React.Component {
    render() {
        var custom = this.props.custom;
        return (
            <html>
            <head>
                <title>{custom.title}</title>
            </head>
            <body>
            <div className="container-fluid">
                {this.props.children}
            </div>
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(custom)
            }}/>
            <script src="/client.js"/>
            </body>
            </html>
        );
    }
}

module.exports = Layout;