import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((state) => state.users.users);
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  const noMatchingResults = useSelector(
    (state) => state.users.noMatchingResults
  );
  const requestError = useSelector((state) => state.users.apiError);

  const renderUsers = () => {
    if (requestError) {
      return <p>{requestError}</p>;
    }
    if (noMatchingResults) {
      return (
        <p>
          There are no matching results for the selected criteria. Modify
          filters and click 'Search Users Button' to search again.
        </p>
      );
    }
    if (filteredUsers.length > 0) {
      return filteredUsers.map(
        ({ id, firstName, lastName, age, email, country, gender }) => (
          <UserCard
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            age={age}
            email={email}
            country={country}
            gender={gender}
          />
        )
      );
    } else {
      return users.map(
        ({ id, firstName, lastName, age, email, country, gender }) => (
          <UserCard
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            age={age}
            email={email}
            country={country}
            gender={gender}
          />
        )
      );
    }
  };

  return <div>{renderUsers()}</div>;
};

export default UsersList;
