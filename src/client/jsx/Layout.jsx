import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as layoutActions from '../../server/lib/actions/layoutActions';


class Layout extends React.Component {
    render() {
        var layout = this.props.layout;
        return (
            <html>
            <head>
                <title>{layout.title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="/css/rc-switch.css"/>
                <link rel="stylesheet" type="text/css" href="/css/style.css"/>
            </head>
            <body>
            <div className="container-fluid">
                {this.props.children}
            </div>
            <script src="/socket.io/socket.io.js"></script>
            <script src="/client.js"/>
            </body>
            </html>
        );
    }
}

function mapStateToProps(store) {
    return {
        layout: store.layout
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(layoutActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);