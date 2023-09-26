const triggers = document.querySelectorAll("li");
const background = document.querySelector(".dropdownBackground");

function handleEnter(e) {
  let dropDown = this.querySelector(".dropdown");
  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.add("trigger-enter-active");
  }, 150);
  background.classList.add("open");
}

function handleOut() {
  this.classList.remove("trigger-enter");
  this.classList.remove("trigger-enter-active");
}

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", handleEnter);
});

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseleave", handleOut);
});
