document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("active");
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const open = answer.style.maxHeight;
    document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
    if (!open) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


