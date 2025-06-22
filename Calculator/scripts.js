"use strict";

let firstNumber;
let operator;
let secondNumber;
let answer;

function calculate(firstNumber, secondNumber, operator) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
  }
}

function showNumber(clicked) {
  if (clicked.target.classList.contains("number")) {
    if (document.querySelector(".print-screen").textContent === "0") {
      document.querySelector(".print-screen").textContent =
        clicked.target.textContent;
    } else {
      document.querySelector(".print-screen").textContent +=
        clicked.target.textContent;
    }
    return;
  } else if (clicked.target.classList.contains("operator")) {
    if (firstNumber == null) {
      firstNumber = document.querySelector(".print-screen").textContent;
      if (clicked.target.textContent === "=") {
        return;
      }
      operator = clicked.target.textContent;
      document.querySelector(".print-screen").textContent = 0;
    } else {
      secondNumber = document.querySelector(".print-screen").textContent;
      answer = calculate(firstNumber, secondNumber, operator);
      firstNumber = answer;
      secondNumber = null;
      if (clicked.target.textContent !== "=") {
        document.querySelector(".print-screen").textContent = "0";
        operator = clicked.target.textContent;
      } else {
        document.querySelector(".print-screen").textContent = answer;
        operator = null;
      }
    }
  } else {
    if (clicked.target.textContent === "C") {
      firstNumber = null;
      secondNumber = null;
      answer = null;
      operator = null;
      document.querySelector(".print-screen").textContent = "0";
    } else if (document.querySelector(".print-screen").textContent !== "0") {
      if (document.querySelector(".print-screen").textContent.length == 1) {
        document.querySelector(".print-screen").textContent = 0;
      } else {
        document.querySelector(".print-screen").textContent = document
          .querySelector(".print-screen")
          .textContent.slice(0, -1);
      }
    }
  }
}

document.querySelector(".calc-buttons").addEventListener("click", showNumber);
