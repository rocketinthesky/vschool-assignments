import React, {Component} from "react";
import EntryInput from "./EntryInput";
import EntryFilter from "./EntryFilter";
import EntryList from "./containers/EntryList";
import EntryDetail from "./containers/entry_detail";

const NEWENTRY = -1;

export default class Entries extends Component {
  constructor(props) {
    super(props);
    this.onChangeEntry = this.onChangeEntry.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLat = this.onChangeLat.bind(this);
    this.onChangeLong = this.onChangeLong.bind(this);
    this.onChangeFilterEntry = this.onChangeFilterEntry.bind(this);
    this.onSaveEntry = this.onSaveEntry.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onDeleteEntry = this.onDeleteEntry.bind(this);
  }

  state = {
    entries: this.props.entries,
    date: '',
    lat: '',
    long: '',
    text: '',
    filterText: '',
    editEntryIx: NEWENTRY,
  }

  componentWillMount() {
    if(localStorage.entries !== undefined) {
      this.setState({entries: JSON.parse(localStorage.entries)});
    }
  }

  onChangeEntry(e) {
    this.setState({inputText: e.target.value});
  }

  onChangeDate(e) {
    this.setState({date: e.target.value});
  }

  onChangeLat(e) {
    this.setState({lat: e.target.value});
  }

  onChangeLong(e) {
    this.setState({long: e.target.value});
  }

  onChangeFilterEntry(e) {
    this.setState({filterText: e.target.value});
  }

  onSaveEntry(e) {
    if (this.state.editEntryIx === NEWENTRY) {
      const newEntry = {
        // date: this.state.inputDate,
        // lat: this.state.inputLat,
        // long: this.state.inputLong,
        text: this.state.inputText,
      };
      this.state.entries = this.state.entries.concat(newEntry);
    } else {
      this.state.entries[this.state.editEntryIx].text = this.state.inputText;
    }

    this.setState({
      entries: this.state.entries,
      // inputDate: '',
      // inputLat: '',
      // inputLong: '',
      inputText: '',
      editEntryIx: NEWENTRY,
    });

    this.persistEntries();
  }

  onEditEntry(editEntryIx) {
    this.setState({
      editEntryIx,
      inputText: this.state.entries[editEntryIx].text,
    });
  }

  onCancelEdit() {
    this.setState({editEntryIx: NEWENTRY, inputText: ''});
  }

  onDeleteEntry(editEntryIx) {
    this.state.entries.splice(editEntryIx, 1);
    this.setState({
      entries: this.state.entries,
      editEntryIx: NEWENTRY,
      inputText: '',
    });

    this.persistEntries();
  }

  persistEntries() {
    localStorage.entries = JSON.stringify(this.state.entries);
  }

  render() {
    return(
      <div>
        <h1>Travel Journal</h1>
        <EntryInput
          onSaveEntry={this.onSaveEntry}
          onChangeEntry={this.onChangeEntry}
          onCancelEdit={this.onCancelEdit}
          inputDate={this.state.inputDate}
          inputLat={this.state.inputLat}
          inputLong={this.state.inputLong}
          inputText={this.state.inputText}
          editing={this.state.editEntryIx !== NEWENTRY} />

          <br/>

        <EntryFilter
          onChangeFilterEntry={this.onChangeFilterEntry}
          filterText={this.state.filterText}/>
          <br />

        <EntryList
          onEditEntry={this.onEditEntry}
          onDeleteEntry={this.onDeleteEntry}
          entries={this.state.entries}
          filterText={this.state.filterText}/>
      </div>
    );
  }
}
