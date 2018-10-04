import React, { Component } from 'react';
import {Button, ButtonToolbar, Col, Row} from 'react-bootstrap';
import './css/home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="bgded overlay imgCustomBg">
                    <Row>
                        <Col sm={12}>
                            <div id="pageIntro" className="hoc clear">
                                <h3>Anyone who never made a mistake has never tried ANYTHING new..!</h3>
                                <ButtonToolbar className="btnwrapper">
                                        <a href="https://praneethashetti.github.io/Praneetha/">
                                            <Button bsStyle="primary" value="github" className="btngitHub">
                                                <i className=" fa fa-github"> GitHub</i>
                                            </Button>
                                        </a>
                                        <a href="https://www.linkedin.com/in/praneetha-s/">
                                            <Button bsStyle="primary" value="LinkedIn" className="btnlinkedIn">
                                                <i className=" fa fa-linkedin"> LinkedIn</i>
                                            </Button>
                                        </a>
                                </ButtonToolbar>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;
