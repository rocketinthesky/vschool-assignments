import React, {Component} from "react";
import {connect} from "react-redux";

class EntryDetail extends Component {
  render() {
    if (!this.props.entry) {
      return <div>Select an entry to view more details</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.entry.location}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    entry: state.activeEntry
  };
}

export default connect(mapStateToProps)(EntryDetail);
