import { useEffect, useState } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      console.log(data.results[0]);
      const first_name = data.results[0].name.first;
      const last_name = data.results[0].name.last;
      const email = data.results[0].email;
      setPerson({ first_name, last_name, email });
    } catch (error) {
      console.error("Error fetching random person data:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
};

export default PersonController;
