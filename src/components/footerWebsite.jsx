import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import './css/footerComponent.css';


class FooterWebsite extends Component {

    render() {
        return (
            <div className="fstyle">
                <Row>
                    <Col xs={12} md={6} xsOffset={3} mdOffset={2}>
                        <Row>
                            <div>
                                <a href="mailto:pshetti0123@gmail.com">
                                    <p className="biolinks"><i class="fa fa-envelope"></i> : pshetti0123@gmail.com</p>
                                </a>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <a href="tel:816-769-8769">
                                    <p className="biolinks"><i class="fa fa-phone-square"></i> : 816-769-8769</p>
                                </a>
                            </div>
                        </Row>
                    </Col>
                    <Col xsHidden md={4}>
                        <Row>
                            <div>
                                <a href="https://github.com/PraneethaShetti">
                                    <p className="biolinks"><i class="fa fa-github"></i> : https://github.com/PraneethaShetti</p>
                                </a>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <a href=" https://www.linkedin.com/in/praneetha-s/">
                                    <p className="biolinks"><i class="fa fa-linkedin"></i> : https://www.linkedin.com/in/praneetha-s/</p>
                                </a>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FooterWebsite;
