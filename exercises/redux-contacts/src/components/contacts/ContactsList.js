import React from "react";
import {connect} from "react-redux";

function ContactsList(props) {
  const contacts = props.contacts.map((contact, i) => <li key={contact.name + i}>{contact.name}</li>)
  return (
    <ul>
      {contacts}
    </ul>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(ContactsList);
