"use strict";

const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const course = document.getElementById("course");
const sessionDate = document.getElementById("sessionDate");
const seats = document.getElementById("seats");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedback = document.getElementById("feedback");

const workshops = ["HTML Essentials", "CSS Studio", "JavaScript Lab"];

for (const workshop of workshops) {
  const option = document.createElement("option");
  option.value = workshop;
  option.textContent = workshop;
  course.append(option);
}

function todayInLocalTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

sessionDate.min = todayInLocalTime();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("was-validated");
  feedback.hidden = true;
  feedback.className = "feedback";

  const trimmedName = fullName.value.trim();
  if (trimmedName.length < 2) {
    fullName.setCustomValidity("Enter at least two characters for your name.");
  } else {
    fullName.setCustomValidity("");
  }

  if (password.value.length < 10) {
    password.setCustomValidity("Use at least 10 characters for this exercise.");
  } else {
    password.setCustomValidity("");
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("The passwords must match.");
  } else {
    confirmPassword.setCustomValidity("");
  }

  if (!form.reportValidity()) {
    feedback.textContent = "Check the highlighted fields and try again.";
    feedback.classList.add("error");
    feedback.hidden = false;
    return;
  }

  const seatCount = seats.valueAsNumber;
  let bookingType = "";

  if (seatCount === 1) {
    bookingType = "Individual booking";
  } else {
    bookingType = "Group booking";
  }

  feedback.textContent = `${trimmedName}, your ${bookingType.toLowerCase()} for ${seatCount} seat${seatCount === 1 ? "" : "s"} in ${course.value} on ${sessionDate.value} is ready to preview.`;
  feedback.classList.add("success");
  feedback.hidden = false;
});

form.addEventListener("input", (event) => {
  feedback.hidden = true;
  feedback.className = "feedback";

  if (event.target === fullName) fullName.setCustomValidity("");
  if (event.target === password) password.setCustomValidity("");
  if (event.target === confirmPassword) confirmPassword.setCustomValidity("");
});
