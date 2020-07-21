import { isEmpty, trim } from "validator";

export const filterBy = (users, name, gender, country, olderThan18) => {
  console.log(name, gender, country, olderThan18);

  const filteredUsers = users
    .filter((user) => {
      if (!name) {
        return true;
      } else {
        return user.firstName.toLowerCase().includes(name);
      }
    })
    .filter((user) => {
      if (gender === "") {
        return true;
      } else {
        return user.gender === gender;
      }
    })
    .filter((user) => {
      if (country === "") {
        return true;
      } else {
        return user.country.toLowerCase() === country;
      }
    })
    .filter((user) => {
      if (olderThan18 === false) {
        return true;
      } else {
        return user.age >= 18;
      }
    });

  return filteredUsers;
};

export const normalizeUsers = (userList) => {
  const normalizedUsers = userList.map(
    ({ name, dob, email, location, gender, login }) => {
      return {
        id: login.uuid,
        firstName: name.first,
        lastName: name.last,
        age: dob.age,
        email: email,
        country: location.country,
        gender: gender,
      };
    }
  );

  return normalizedUsers;
};

export const validate = (input) => {
  if (typeof input === "string") {
    const isStringEmpty = isEmpty(input, { ignore_whitespace: true }); // returns true or false

    // return the trimmed string value if actual string
    if (!isStringEmpty) {
      return trim(input.toLowerCase());
    }

    // if empty string, return null
    if (isStringEmpty) {
      return null;
    }
  }
};
