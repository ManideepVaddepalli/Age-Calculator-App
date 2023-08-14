import React from "react";
import Validity from "./Validity";
import { useState } from "react";

export default function Birthday() {
  // code for making text boxs dynamic
  let [dateform, setDateform] = useState("");
  function datechanged(event) {
    setDateform(event.target.value);
  }
  let [monthform, setMonthform] = useState("");
  function monthchanged(event) {
    setMonthform(event.target.value);
  }
  let [yearform, setYearform] = useState("");
  function yearchanged(event) {
    setYearform(event.target.value);
  }
  // -------------------------------------------------------------------
  return (
    <section className="birthday-section">
      <form className="birthday-form">
        <div className="birthday-day birthsection">
          <h6>DAY</h6>
          <input
            maxLength="2"
            id="birthdate"
            value={dateform}
            onChange={datechanged}
            type="text"
            placeholder="DD"
          ></input>
          <Validity name="date" />
        </div>
        <div className="birthday-month birthsection">
          <h6>MONTH</h6>
          <input
            maxLength="2"
            id="birthmonth"
            onChange={monthchanged}
            value={monthform}
            type="text"
            placeholder="MM"
          ></input>
          <Validity name="month" />
        </div>
        <div className="birthday-year birthsection">
          <h6>YEAR</h6>
          <input
            maxLength="4"
            onChange={yearchanged}
            value={yearform}
            id="birthyear"
            // value={yearForm}
            type="text"
            placeholder="YYYY"
          ></input>
          <Validity name="year" />
        </div>
      </form>
    </section>
  );
}
