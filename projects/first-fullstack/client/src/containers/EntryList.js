import React, {Component} from "react";
import {connect} from "react-redux";
import {selectEntry} from "../actions/index";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

// class EntryList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.entries.map(entry => (
//           <li
//             key={entry.date}
//             onClick={() => this.props.selectEntry(entry)}>
//             <span>{entry.date}</span> <br/>
//             <h5>Location: {entry.location.lat}, {entry.location.long}</h5>
//             <p>{entry.description}</p> <br/>
//           </li>))}
//       </ul>
//     );
//   }

  function filterEntries (entries, filterText) {
    if (filterText.length === 0) {
      return entries
    };
    return entries.filter(entry => new RegExp(filterText, 'i').test(entry.text));
  }

  const EntryList = ({onEditEntry, onDeleteEntry, entries, filterText}) =>
    <div>
      {filterEntries(entries, filterText).map((entry, ix) =>
      <div key={entry.date}>
        <span>{entry.date}</span>
        [<i onClick={() => onEditEntry(ix)} className="fa fa-pencil" title="Edit Entry"></i>]
        [<i onClick={() => onDeleteEntry(ix)} className="fa fa-trash" title="Delete Entry"></i>]
        <div dangerouslySetInnerHTML={{__html: entry.text}} />
      </div>)}
    </div>;

  EntryList.PropTypes = {
    onEditEntry: React.PropTypes.func,
    onDeleteEntry: React.PropTypes.func,
    entries: React.PropTypes.array,
  };


//
export default EntryList;

// function mapStateToProps(state) {
//   return {
//     entries: state.entries
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({selectEntry: selectEntry}, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
