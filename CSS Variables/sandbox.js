let inputVal = document.querySelectorAll(".controls input");

function handleChange(e) {
  console.log(document.documentElement);
  const element = e.target;
  const suffix = this.dataset.sizing ? "px" : "";
  document.documentElement.style.setProperty(
    `--${element.name}`,
    `${element.value}${suffix}`
  );
}

inputVal.forEach((input) => {
  input.addEventListener("change", handleChange);
  input.addEventListener("mousemove", handleChange);
});
