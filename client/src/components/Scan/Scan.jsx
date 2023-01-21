import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Scan = () => {
  const id = useParams().id;
  const [user, setUser] = useState({
    username: "",
    allergies: [],
    medications: [],
    medical_history: [],
  });

  const fetchUser = async () => {
    await axios
      .get(`/api/v1/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <section>
      <h1>Scanning {user.username}</h1>
      <li>
        {" "}
        Allergies:
        {user.allergies.map((el, index) => {
          return <p>{el}</p>;
        })}
      </li>
      <li>
        {" "}
        Past Medical History:
        {user.medical_history.map((el, index) => {
          return <p>{el}</p>;
        })}
      </li>
      <li>
        {" "}
        Medications:
        {user.medications.map((el, index) => {
          return <p>{el}</p>;
        })}
      </li>
    </section>
  );
};

export default Scan;
