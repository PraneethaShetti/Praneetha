import React, { Component } from 'react';
import {Col, Row, Media} from 'react-bootstrap';
import './css/about.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <Row className="aboutContainer">
                    <Col xs={12} md={6}>
                        <Media>
                            <img className="imgContainer" src="../myself.jpg" alt="thumbnail" />
                        </Media>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="myDescription">
                            <ul>
                                <li>
                                As a web/Front End developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. 
                                That's why I’m excited to make a big impact at a high growth company.
                                </li>
                                <li>
                                Extensive Professional experience in the developing User Interface Applications, Responsive and professional web applications using React, Angular JS 1.x/2.x, Bootstrap, HTML4.0/5, CSS2/ CSS3, JavaScript, jQuery, AJAX, JSON and XML
                                </li>
                                <li>
                                Expert in HTML5/CSS3 development and have experience in React JS, Angular JS, Responsive design and good knowledge with bootstrap CSS.
                                </li>
                            </ul>
                            <ol>
                                <li>
                                    <h4>Research</h4>
                                    Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.
                                </li>
                                <li>
                                    <h4>Design</h4>
                                    Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup.
                                </li>
                                <li>
                                    <h4>Develop</h4>
                                    Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer.
                                </li>
                            </ol>
                        </div>
                    </Col>
                    <Col className="mobileResume" xs={12} smHidden mdHidden lgHidden>
                        <div className="myDescription">
                            <h3>To get to know more about mywork <a href="https://drive.google.com/drive/folders/1BnQYxMOtLpCkIvtraxC6cJlT-s2VKJ68?usp=sharing">"Download my Resume"</a></h3>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;
