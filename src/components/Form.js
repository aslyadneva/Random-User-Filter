import React, { useState } from "react";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { filterUsers } from "../actions/index.js";
import { validate } from "../helpers";

const Form = () => {
  const [nameValue, setNameValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [isOver18Value, setIsOver18Value] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch action with filter parameters
    dispatch(
      filterUsers({
        name: validate(nameValue),
        gender: genderValue,
        country: countryValue,
        isOver18: isOver18Value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-12 col-lg-8">
          <input
            type="text"
            placeholder="Search Input"
            value={nameValue}
            onChange={({ target }) => setNameValue(target.value)}
            className="form-control"
          />
        </div>

        <div className="col-12 col-lg-4 mt-3 mt-lg-0">
          <button type="submit" className="btn btn-block FormButton">
            Search Users Button
          </button>
        </div>
      </div>

      {/* Filter Box  */}
      <div className="border my-3 p-3 FilterBox">
        <p>Filter by: </p>

        {/* Gender Filter */}
        <Filter
          id="genderFilter"
          filterType="nested"
          name="gender"
          values={["male", "female"]}
          sendSelectedValue={setGenderValue}
          label="Gender Filter"
        />

        {/* Country Filter */}
        <Filter
          id="counrtyFilter"
          filterType="nested"
          name="country"
          values={["france", "united states"]}
          sendSelectedValue={setCountryValue}
          label="Country filter"
        />

        {/* Is Over 18 Filter */}
        <Filter
          id="isOver18Filter"
          filterType="simple"
          name="isOver18"
          values={isOver18Value}
          sendSelectedValue={setIsOver18Value}
          label="Older than 18?"
        />
      </div>
    </form>
  );
};

export default Form;
