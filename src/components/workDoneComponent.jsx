import React, { Component } from 'react';
import './css/workDoneComponent.css'
import {Col} from 'react-bootstrap';

class WorkDoneComponent extends Component {
    handleClick(){
        this.props.onClick();
    }
    render() {
        return (
            <Col xs={12} md={4}>
                <div className="workDoneContainer" style={{backgroundColor:this.props.backgroundColor}}>
                    <div className="outerSquare">
                        <h3> {this.props.title} </h3>
                        <p>{ this.props.description}</p>
                        <button onClick={()=>this.handleClick()} >Try it here</button>
                    </div>
                </div>
            </Col>
        );
    }
}

export default WorkDoneComponent;
