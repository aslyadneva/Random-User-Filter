import React, { useEffect } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import { setUsers, apiError } from "./actions/index.js";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetch(
        "https://randomuser.me/api/?results=50&noinfo&inc=gender,name,location,email,dob,login"
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      if (fetchedUsers.error) {
        dispatch(apiError(fetchedUsers.error));
      } else {
        dispatch(setUsers(fetchedUsers.results));
      }
    };

    getUsers();
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <Form />
      <UsersList />
    </div>
  );
};

export default App;
