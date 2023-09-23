import React from "react";

const Person = ({ person }) => {
  if (!person) {
    return null;
  }

  return (
    <ul className="person-list">
      <li>First name: {person.first_name}</li>
      <li>Last name: {person.last_name}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
};

export default Person;
