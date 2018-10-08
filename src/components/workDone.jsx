import React, { Component } from 'react';
import WorkDoneComponent from './workDoneComponent';
import { Row } from 'react-bootstrap';
import './css/workDone.css'
import FrameComponent from './frameComponent';

const componentsDS = [
    {
        title: "Tic Tac Toe",
        description: "Tic Tac Toe..!!! game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game",
        src: "https://praneethashetti.github.io/Tictactoe/",
        styleCSS: {
            backgroundColor: '#b3c5e0'
        }
    },
    {
        title: "Mini Youtube",
        description: "Search your fav song in search bar, we have at max 10relevent items of search appear on page, click them Enjoy your search result by clicking on them...Music speaks Mind out.!",
        src: "https://praneethashetti.github.io/MiniYoutube/",
        styleCSS: {
            backgroundColor: '#c0add6'
        }
    },
    {
        title: "Fastest fingers first",
        description: "Good at math.? Ok lets check, We have a target numebr and six options to select, select as many tiles as possible to get the sum = target in 15Sec. All the best.!",
        src: "https://praneethashetti.github.io/Fastestfingerfirst/",
        styleCSS: {
            backgroundColor: '#77b6b6'
        }
    },
    {
        title: "ToDo list",
        description: "Remain connected with busy life..!! Simple 3 steps to stay connected, Add elements to the list by typing in, mark things as done by clicking on tick, delete things from list by clicking on 'x'.",
        src: "https://praneethashetti.github.io/todolist/",
        styleCSS: {
            backgroundColor: '#b3c5e0'
        }
    },
    {
        title: "Game of Life",
        description: "Conway's Game of Life..., The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
        src: "https://praneethashetti.github.io/GameofLife/",
        styleCSS: {
            backgroundColor: '#c0add6'
        }
    },
    {
        title: "BodyMass Calculator",
        description: "Basic body mass calculator with standard and metric board. BMI Categories: Underweight = <18.5; Normal weight = 18.5–24.9; Overweight = 25–29.9; Obesity = BMI of 30 or greater",
        src: "https://praneethashetti.github.io/BodyMassCalculator/",
        styleCSS: {
            backgroundColor: '#77b6b6'
        }
    },
    {
        title: "Weather App",
        description: "In Progress",
        src: "",
        styleCSS: {
            backgroundColor: '#b3c5e0'
        }
    }
    // {
    //     title: "Weather App",
    //     description: "Weather forecast app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius, min and max temperatures for next 7days.",
    //     src: "",
    //     styleCSS: {
    //         backgroundColor: '#b3c5e0'
    //     }
    // }

]
class WorkDone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            content: []
        }
        this.handleClick = (element) => {
            this.setState({ isVisible: true, content: element })
        };

        this.handleHide = () => {
            this.setState({ isVisible: false });
        }
    }

    render() {
        return (
            <div>
                <Row className="show-grid">
                    {
                        componentsDS.map((element, i) => {
                            return <WorkDoneComponent key={i} onClick={() => this.handleClick(element)} title={element.title} src={element.src} description={element.description} backgroundColor={element.styleCSS.backgroundColor} />
                        })
                    }
                </Row>
                {
                    this.state.isVisible === true ? <FrameComponent content={this.state.content} handleHide={() => this.handleHide()} show={true} /> : ''

                }
            </div>
        );
    }
}

export default WorkDone;
