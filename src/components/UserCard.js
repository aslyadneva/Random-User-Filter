import React from "react";

const UserCard = ({ firstName, lastName, age, email, country, gender }) => {
  return (
    <div className="card mb-3 Card">
      <div className="card-body">
        <p>{`${firstName} ${lastName}, ${age}`}</p>
        <p>{email}</p>
        <p className="mb-0">{country}</p>
      </div>
    </div>
  );
};

export default UserCard;
