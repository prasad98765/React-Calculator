import React, { Component } from 'react';
import KeyPad from "./KeyPad";

class Result extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        
        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            console.log("to understand",button);
            this.setState({
                result: this.state.result + button
            })

        }
    };


    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) )
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>React Calculator</h1>
                    <div className="result">
                        <p>{this.state.result}</p>
                    </div>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Result;
