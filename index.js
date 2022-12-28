let questions = document.querySelectorAll(".faq__question");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    question.classList.toggle("faq__question_active");
    const nextElement = question.nextElementSibling;
    nextElement.classList.toggle("faq__panel_active");
  });
});

const colorSwitcher = document.querySelector(".color-scheme");
colorSwitcher.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});
