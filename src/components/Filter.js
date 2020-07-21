import React, { useState } from "react";

const Filter = ({ filterType, id, name, values, label, sendSelectedValue }) => {
  const [filterEnabled, setEnableFilter] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  /* For filterType 'nested', the option to select a value from its 
  adjacent radio buttons is only available if it's checkbox filter is enabled */

  const handleFilterChange = () => {
    setEnableFilter(!filterEnabled); // enabling the filter
    setSelectedValue("");
    sendSelectedValue("");
  };

  const handleValueChange = ({ target }) => {
    setSelectedValue(target.value);
    sendSelectedValue(target.value);
  };

  if (filterType === "nested") {
    return (
      <div className="d-flex">
        <div>
          <input
            type="checkbox"
            id={id}
            checked={filterEnabled}
            onChange={handleFilterChange}
          />
          <label htmlFor={id} hidden>
            {label}
          </label>
        </div>

        <div className="ml-3 form-check form-check-inline">
          <input
            type="radio"
            name={name}
            value={values[0]}
            disabled={filterEnabled ? false : true}
            checked={selectedValue === values[0]}
            onChange={handleValueChange}
            className="form-check-input"
          />
          <label className="form-check-label Nested-label">{values[0]}</label>
        </div>

        <div className="ml-3 form-check form-check-inline">
          <input
            type="radio"
            name={name}
            value={values[1]}
            disabled={filterEnabled ? false : true}
            checked={selectedValue === values[1]}
            onChange={handleValueChange}
            className="form-check-input"
          />
          <label className="form-check-label Nested-label">{values[1]}</label>
        </div>
      </div>
    );
  }

  if (filterType === "simple") {
    return (
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          id={id}
          checked={values}
          value={values}
          onChange={() => sendSelectedValue(!values)}
        />
        <label htmlFor={id} className="ml-3 mb-0">
          {label}
        </label>
      </div>
    );
  }
};

export default Filter;
