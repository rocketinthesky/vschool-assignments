import React, {Component} from "react";
import {connect} from "react-redux";
import {addUgly} from "../../redux/ugly-list";

const styles = {
  backgroundColor: "pink",
  textAlign: "center",
  padding: "10px"
}

const inputStyle = {
  width: "25%",
  marginLeft: "1%",
  marginRight: "1%",
}

class AddUglyForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ``,
      image: ``,
      desc: ``
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addUgly(this.state);
    this.setState({
      title: "",
      image: "",
      desc: ""
    });

  }
  render() {
    return (
      <div style={styles}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            size="32"
            style={inputStyle}
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            size="32"
            style={inputStyle}
            name="image"
            placeholder="Img URL"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <input
            type="text"
            size="32"
            style={inputStyle}
            name="desc"
            placeholder="Description"
            value={this.state.desc}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// export default AddUglyForm;
export default connect(null, {addUgly})(AddUglyForm);
