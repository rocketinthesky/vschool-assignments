import React, {Component} from "react";

class NameForm extends Component {
//here is a pretty standard constructor
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      names: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//handleChange does not need to be complicated. We are only mirroring what's in the input box (event.target.value) to the state.

  handleChange(event) {
    this.setState({value: event.target.value});
  }

//we need the event in the handle submit so we can prevent the submission from refreshing the page with .preventDefault()

  handleSubmit(event) {
    // nameList.push(this.state.value);
    event.preventDefault();
  }

  render() {
    const namesList = this.state.names.map((name, i)=>{
      return <Name name={name} key={name+i}/>
    })
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameForm;
