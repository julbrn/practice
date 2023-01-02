let questions = document.querySelectorAll(".faq__question");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    question.classList.toggle("faq__question_active");
    const nextElement = question.nextElementSibling;
    nextElement.classList.toggle("faq__panel_active");
  });
});

document.documentElement.classList.add("light");

const colorSwitcher = document.querySelector(".color-theme");
const logo = document.querySelector(".logo__url");
colorSwitcher.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    logo.src = "images/logo-dark.svg";
  } else {
    logo.src = "images/logo.svg";
  }
});

const burger = document.querySelector(".burger");
const burgerLinks = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burgerLinks.classList.toggle("active");
});
