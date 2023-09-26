const links = document.querySelectorAll("a");
const highlight = document.createElement("span");
document.body.append(highlight);
highlight.classList.add("highlight");

function handleEnter() {
  const sizeOfSpan = this.getBoundingClientRect();
  const coords = {
    width: sizeOfSpan.width,
    height: sizeOfSpan.height,
    left: sizeOfSpan.left + window.scrollX,
    top: sizeOfSpan.top + window.scrollY,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.left = `${coords.left}px`;
  highlight.style.top = `${coords.top}px`;
}

links.forEach((trig) => {
  trig.addEventListener("mouseenter", handleEnter);
});
