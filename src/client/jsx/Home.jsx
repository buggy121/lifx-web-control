import React from 'react';
import {Grid, Row, Thumbnail, Col} from 'react-bootstrap';
import {Link} from 'react-router';


class Home extends React.Component {
    render() {
        return (
            <div id="home" className="text-center">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h1>Choose the way you want to control your bulbs ;)</h1>
                        </Col>
                        <Col xs={6}>
                            <Link to="/control/lan">
                                <Thumbnail src="/img/home-icon.png" alt="Home">
                                    <h3>LAN</h3>
                                    <p>Control your bulbs from your home network.</p>
                                    <div className="button-pinned lan">
                                        Enter >
                                    </div>
                                </Thumbnail>
                            </Link>
                        </Col>
                        <Col xs={6}>
                            <Link to="/control/remote/auth">
                                <Thumbnail src="/img/remote-icon.png" alt="Remote">
                                    <h3>Remote</h3>
                                    <p>Control your bulbs wherever you are.</p>
                                    <div className="button-pinned remote">
                                        Enter >
                                    </div>
                                </Thumbnail>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;