import React from "react";
import {connect} from "react-redux";
import {getAllTodos} from ".";

class ContactsList extends Component {
  componentDidMount(){
    this.props.getAllTodos();
  }

  render() {
      const contacts = this.props.contacts.map((contact, i) => <li key={contact.name + i}>{contact.name}</li>)
    return (
      <ul>
        {contacts}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getAllTodos})(ContactsList);
