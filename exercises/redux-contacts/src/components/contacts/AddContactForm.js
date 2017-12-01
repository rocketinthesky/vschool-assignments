import React, {Component} from "react";
import {connect} from "react-redux";
import {addContact} from "../../redux/contacts";

class AddContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ``
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addContact(this.state)
    this.setState({
      name: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="New Contact Name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}
        />
        <button>Add Contact</button>
      </form>
    )
  }

}

export default connect(null, {addContact})(AddContactForm);
