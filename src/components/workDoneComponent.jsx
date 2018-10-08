import React, { Component } from 'react';
import './css/workDoneComponent.css'
import {Col, Button ,bsStyle} from 'react-bootstrap';

class WorkDoneComponent extends Component {
    handleClick(){
        this.props.onClick();
    }
    render() {
        return (
            <Col xs={12} sm={6} md={4}>
                <div className="workDoneContainer" style={{backgroundColor:this.props.backgroundColor}}>
                    <div className="outerSquare">
                        <h3> {this.props.title} </h3>
                        <p>{ this.props.description}</p>
                        <Button className="Try" onClick={()=>this.handleClick()} >Try it here</Button>
                    </div>
                </div>
            </Col>
        );
    }
}

export default WorkDoneComponent;
