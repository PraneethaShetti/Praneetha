import React, { Component } from 'react';
import WorkDoneComponent from './workDoneComponent';
import {Row} from 'react-bootstrap';
import './css/workDone.css'
import FrameComponent from './frameComponent';

const componentsDS=[
    {
        title:"Tic Tac Toe",
        description:"Game of tic tac toe",
        src:"https://praneethashetti.github.io/Tictactoe/",
        styleCSS:{
            backgroundColor:'#b3c5e0'
        }
    },
    {
        title:"Game of Life",
        description:"Fun of Seed/pause/play",
        src:"https://praneethashetti.github.io/GameofLife/",
        styleCSS:{
            backgroundColor:'#c0add6'
        }
    },
    {
        title:"ToDo list",
        description:"Remain connected with busy life",
        src:"",
        styleCSS:{
            backgroundColor:'#77b6b6'
        }
    },
    // {
    //     title:"BodyMass Calculator",
    //     description:"Check to stay stable",
    //     src:"",
    //     styleCSS:{
    //         backgroundColor:'#77b6b6'
    //     }
    // },
    // {
    //     title:"Mini Youtube",
    //     description:"Speak your mood out",
    //     src:"",
    //     styleCSS:{
    //         backgroundColor:'#77b6b6'
    //     }
    // },
    // {
    //     title:"Number calculator",
    //     description:"fastest fingers first",
    //     src:"",
    //     styleCSS:{
    //         backgroundColor:'#77b6b6'
    //     }
    // },
]
class WorkDone extends Component {
    constructor(props){
        super(props);
        this.state={
            isVisible: false,
            content:[]
        }
        this.handleClick=(element)=>{
           this.setState({isVisible:true, content:element})
        };

        this.handleHide=()=>{
            this.setState({isVisible:false});
        }
    }

    render() {
        return (
            <div>
                <Row className="show-grid">
                    {
                        componentsDS.map((element, i)=>{
                            return <WorkDoneComponent key={i} onClick={()=>this.handleClick(element)} title={element.title} src={element.src} description={element.description}  backgroundColor={element.styleCSS.backgroundColor}/>
                        })
                    }
                </Row>
                {
                    this.state.isVisible===true?<FrameComponent content={this.state.content} handleHide={()=>this.handleHide()}show={true}/>:''

                }
            </div>
        );
    }
}

export default WorkDone;
