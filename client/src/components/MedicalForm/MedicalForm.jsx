import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";

const MedicalForm = () => {
  const authMgr = useContext(authCtx);
  const nav = useNavigate();

  const [medications, setMedications] = useState(
    authMgr.currentUser.medications
  );
  const [allergies, setAllergies] = useState(authMgr.currentUser.allergies);
  const [medical_history, setMedicalHistory] = useState(
    authMgr.currentUser.medical_history
  );

  const [med, setMed] = useState("");
  const [allergy, setAllergy] = useState("");
  const [history, setHistory] = useState("");

  const filterArr = (which, el) => {
    which === "allergies" &&
      setAllergies((prev) => prev.filter((elRet) => elRet !== el));
    which === "medications" &&
      setMedications((prev) => prev.filter((elRet) => elRet !== el));
    which === "medical_history" &&
      setMedicalHistory((prev) => prev.filter((elRet) => elRet !== el));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .patch(`/api/v1/user/${authMgr.currentUser._id}`, {
        allergies,
        medications,
        medical_history,
      })
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data);
        nav(`/users/${authMgr.currentUser._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setAllergy(e.target.value)}
          value={allergy}
          placeholder="Add an allergy"
          type={"text"}
        />{" "}
        <span onClick={() => setAllergies((prev) => [allergy, ...prev])}>
          +
        </span>
        <input
          onChange={(e) => setMed(e.target.value)}
          value={med}
          placeholder="Add an medication"
          type={"text"}
        />{" "}
        <span onClick={() => setMedications((prev) => [...prev, med])}>+</span>
        <input
          onChange={(e) => setHistory(e.target.value)}
          value={history}
          placeholder="Add an medical conditon"
          type={"text"}
        />
        <span onClick={() => setMedicalHistory((prev) => [...prev, history])}>
          +
        </span>
        <input type={"submit"} />
      </form>
      {allergies.map((el, index) => {
        return (
          <span>
            {el} <span onClick={() => filterArr("allergies", el)}>x </span>
          </span>
        );
      })}
      {medications.map((el, index) => {
        return (
          <span>
            {el} <span onClick={() => filterArr("medications", el)}>x </span>
          </span>
        );
      })}
      {medical_history.map((el, index) => {
        return (
          <span>
            {el}{" "}
            <span onClick={() => filterArr("medical_history", el)}>x </span>
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default MedicalForm;
