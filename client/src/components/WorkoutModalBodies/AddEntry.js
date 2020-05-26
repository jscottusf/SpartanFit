import React from 'react';

function AddEntry(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <label htmlFor="dataData">Date (MM/DD/YYYY)</label>
        <input
          //I want to add this below to make things easier for the user but I noticed that it changes
          //the component value to a different format ie: 2020-25-05
          //Do you think it's possible to change how the data is accepted?
          //type="date"
          className="form-control"
          id="dataDate"
          name="dataDate"
          placeholder="01/01/20..."
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dataValue">Value</label>
        <input
          className="form-control"
          id="dataValue"
          name="dataValue"
          placeholder="1, 5, 20..."
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
}

export default AddEntry;

// onChange={props.handleInputChange}
