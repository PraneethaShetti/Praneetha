import React, { Component } from 'react';
import WorkDoneComponent from './workDoneComponent';
import {Row} from 'react-bootstrap';
import './css/workDone.css'
import FrameComponent from './frameComponent';

const componentsDS=[
    {
        title:"Tic Tac Toe",
        description:"Tic Tac Toe..!!! game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game",
        src:"https://praneethashetti.github.io/Tictactoe/",
        styleCSS:{
            backgroundColor:'#b3c5e0'
        }
    },
    {
        title:"Game of Life",
        description:"Conway's Game of Life..., The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
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
