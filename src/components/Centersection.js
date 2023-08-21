import React from "react";
import ReactDOM from "react-dom/client";
import Age from "./Age";
import { useState } from "react";

export default function Centersection() {
  let check1 = false;
  let check2 = false;
  let check3 = false;
  let [H1years, setH1years] = useState("- -");
  let [H1months, setH1months] = useState("- -");
  let [H1days, setH1days] = useState("- -");
  function setDefaultValues() {
    setH1years("- -");
    setH1months("- -");
    setH1days("- -");
  }

  // function when invalid details are entered
  function setRed() {
    let dateTyped = document.querySelectorAll("input");
    dateTyped.forEach((field) => {
      field.style.border = "1px solid hsl(0, 100%, 67%)";
    });
    let selecledMsg = document.querySelectorAll(".validity");
    selecledMsg.forEach((element, index) => {
      let errorMsg = ReactDOM.createRoot(element);
      switch (index) {
        case 0:
          errorMsg.render(<p>Must be a valid date</p>);
          break;
        case 1:
          errorMsg.render(<p>Must be a valid month</p>);
          break;
        case 2:
          errorMsg.render(<p>Must be a valid year</p>);
          break;
        default:
      }
    });
  }
  // function when valid details are entered
  function setGreen() {
    let dateTyped = document.querySelectorAll("input");
    dateTyped.forEach((field) => {
      field.style.border = "0px";
    });
    let selecledMsg = document.querySelectorAll(".validity");
    selecledMsg.forEach((element, index) => {
      let errorMsg = ReactDOM.createRoot(element);
      switch (index) {
        case 0:
          errorMsg.render();
          break;
        case 1:
          errorMsg.render();
          break;
        case 2:
          errorMsg.render();
          break;
        default:
      }
    });
  }
  function buttonClicked() {
    let dateArray = [];
    let dateTyped = document.querySelectorAll("input");
    let selecledMsg = document.querySelectorAll(".validity");
    dateTyped.forEach((field, index) => {
      let numberOfField = Number(field.value);
      // check weather they entered number or alphabets
      if (Number.isNaN(numberOfField)) {
        console.log(field);
        field.style.border = "1px solid hsl(0, 100%, 67%)";
        switch (index) {
          case 0:
            check1 = false;
            break;
          case 1:
            check2 = false;
            break;
          case 2:
            check3 = false;
            break;
          default:
        }
      } else {
        field.style.border = "0px";
        switch (index) {
          case 0:
            check1 = true;
            break;
          case 1:
            check2 = true;
            break;
          case 2:
            check3 = true;
            break;
          default:
        }
        // check if entered correct date
        dateArray.push(numberOfField);
      }
    });

    function setOnlyDateRed() {
      dateTyped[0].style.border = "1px solid hsl(0, 100%, 67%)";
      let errorMsg = ReactDOM.createRoot(selecledMsg[0]);
      errorMsg.render(<p>Must be a valid date</p>);
    }
    function setOnlyMonthRed() {
      dateTyped[1].style.border = "1px solid hsl(0, 100%, 67%)";
      let errorMsg = ReactDOM.createRoot(selecledMsg[1]);
      errorMsg.render(<p>Must be a valid month</p>);
    }
    function setOnlyYearRed() {
      dateTyped[2].style.border = "1px solid hsl(0, 100%, 67%)";
      let errorMsg = ReactDOM.createRoot(selecledMsg[2]);
      errorMsg.render(<p>Must be a valid Year</p>);
    }
    // interchanging months with date
    // ------------------------------------------------------
    // creating current array time
    let currentDate = new Date();
    // ------------------------------------
    // setting a birthdate
    let birthDate = new Date();
    birthDate.setDate(dateArray[0]);
    birthDate.setMonth(dateArray[1] - 1);
    birthDate.setFullYear(dateArray[2]);
    let diffinDate = currentDate - birthDate;
    // difference in date in reference to jan 1st 1970
    let differenceDate = new Date(diffinDate);
    // ------------------------------------------------------------------
    // checking if the birthdate goes past the current date
    // defining a variable which gets birth month
    let x = dateArray[1] - 1;
    if (check1 && check2 && check3) {
      if (currentDate <= birthDate) {
        setRed();
        setDefaultValues();
      } else {
        if (x >= 0 && x < 12) {
          if (
            (x === 0 ||
              x === 2 ||
              x === 4 ||
              x === 6 ||
              x === 7 ||
              x === 9 ||
              x === 11) &&
            (dateArray[0] > 31 || dateArray[0] < 1)
          ) {
            setOnlyDateRed();
            setDefaultValues();
          } else if (
            (x === 3 || x === 5 || x === 8 || x === 10) &&
            (dateArray[0] > 30 || dateArray[0] < 1)
          ) {
            setOnlyDateRed();
            setDefaultValues();
          } else if (
            x === 1 &&
            dateArray[2] % 4 === 0 &&
            (dateArray[0] > 29 || dateArray[0] < 1)
          ) {
            setOnlyDateRed();
            setDefaultValues();
          } else if (
            x === 1 &&
            dateArray[2] % 4 !== 0 &&
            (dateArray[0] > 28 || dateArray[0] < 1)
          ) {
            setOnlyDateRed();
            setDefaultValues();
          } else {
            // -------------------------------------------------------------actual solution
            setGreen();
            //calculation for solution
            console.log(differenceDate);
            // since the javaScript starts from 1 jan 1970
            // changing values dynamically using useState.
            setH1days(differenceDate.getDate() - 1);
            setH1months(differenceDate.getMonth());
            setH1years(differenceDate.getFullYear() - 1970);
          }
        } else {
          setOnlyMonthRed();
          setDefaultValues();
        }
      }
    } else {
      if (!check1) {
        setOnlyDateRed();
        setDefaultValues();
      }
      if (!check2) {
        setOnlyMonthRed();
        setDefaultValues();
      }
      if (!check3) {
        setOnlyYearRed();
        setDefaultValues();
      }
    }
  }
  return (
    <div className="center-section">
      <div className="button-container">
        <button type="button" onClick={buttonClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="3">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <div className="age-container">
        <Age name="years" number={H1years} />
        <Age name="months" number={H1months} />
        <Age name="days" number={H1days} />
      </div>
    </div>
  );
}
