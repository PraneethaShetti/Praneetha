import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './css/frameComponent.css';
class FrameComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          show: this.props.show,
          content: this.props.content
        };
      }
    
      handleHide() {
        this.props.handleHide()
      }

      render() {
        return (
          <div className="modal-container" style={{ height: 200 }}>
            <Modal
              show={this.props.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  {this.props.Title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modalDiv">
                  <iframe src={this.props.content.src} height="100%" width="100%"></iframe>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
}

export default FrameComponent;
