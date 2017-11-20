import React, {Component} from "react";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            word: "",
            currentWord: ""
        }
        this.updateInput = this.updateInput.bind(this)
        this.postNewWord = this.postNewWord.bind(this)
    }

    updateInput(event) {
        this.setState({word: event.target.value})
    }

    postNewWord(){
        this.setState({currentWord: this.state.word})
    }

    render(){
        return (
            <div>

                <input onChange={this.updateInput} value={this.state.word}/>
                <button onClick={this.postNewWord}>submit</button>

                <h1>{this.state.currentWord}</h1>
            </div>
        )
    }
}

export default Input;
