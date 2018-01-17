import React from "react";
import PropTypes from "prop-types";

const EntryFilter = ({onChangeFilterEntry, filterText}) =>
  <div>
      <div>
        <label>
          <div>Search Entries</div>
          <input size="64" value={filterText} onChange={onChangeFilterEntry} />
        </label>
      </div>
  </div>;

EntryFilter.PropTypes = {
  onChangeFilterEntry: React.PropTypes.func,
  filterText: React.PropTypes.string,
};

export default EntryFilter;
