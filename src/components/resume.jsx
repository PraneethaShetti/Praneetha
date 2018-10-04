import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import {Row, Col} from 'react-bootstrap';
import './css/resume.css';


class Resume extends Component {
    state = {
        numPages: null,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { numPages } = this.state;

        return (
        <div>
            <Row>
                <Col xsHidden smOffset={1} mdOffset={3}>
                    <div className="resumeWrapper">
                        <a href="https://drive.google.com/drive/folders/1BnQYxMOtLpCkIvtraxC6cJlT-s2VKJ68?usp=sharing">Download Resume</a>
                        <Document className="pdfViewer"
                        file="../PraneethaShetti.pdf"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        >

                        <Page pageNumber={1} />
                        <p>Page {1} of {numPages}</p>
                        <Page pageNumber={2} />
                        <p>Page {2} of {numPages}</p>
                        <Page pageNumber={3} />
                        <p>Page {3} of {numPages}</p>
                        <Page pageNumber={4} />
                        <p>Page {4} of {numPages}</p>
                        </Document>
                    </div>
                </Col>
            </Row>
        </div>
        );
    }
}

export default Resume;
