import React from "react";
import PropTypes from 'prop-types';

const EntryInput = ({onSaveEntry, onChangeDate, inputDate, onChangeLat, onChangeLong, onChangeEntry, onCancelEdit, inputLat, inputLong, inputText, editing}) =>

  <fieldset>
    <legend>Travel Entry</legend>
    <div>
      <label>Date:
        <input type="date" name="date" value={inputDate} onChange={onChangeDate}/>
      </label>
      <br />
      <label>Latitude:
        <input type="number" name="latitude" value={inputLat} onChange={onChangeLat}/>
      </label>
      <br/>
      <label>Longitude:
        <input type="number" name="longitude" value={inputLong} onChange={onChangeLong}/>
      </label>
      <br/>
      <label>Events:
        <br/>
        <textarea rows="6" cols="100" value={inputText} onChange={onChangeEntry}/>
      </label>
    </div>
    <button onClick={onSaveEntry}>{editing ? 'Update' : 'Add'} Entry</button>
      {editing && <button onClick={onCancelEdit}>Cancel</button>}
  </fieldset>

  EntryInput.PropTypes = {
    onSaveEntry: React.PropTypes.func,
    onChangeDate: React.PropTypes.func,
    onChangeLat: React.PropTypes.func,
    onChangeLong: React.PropTypes.func,
    onChangeEntry: React.PropTypes.func,
    onCancelEdit: React.PropTypes.func,
    inputDate: React.PropTypes.instanceOf(Date),
    inputLat: React.PropTypes.number,
    inputLong: React.PropTypes.number,
    inputText: React.PropTypes.string,
    editing: React.PropTypes.bool
  };

export default EntryInput;
