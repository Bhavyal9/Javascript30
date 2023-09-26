const checkboxes = document.querySelectorAll("input[type='checkbox']");

let inBetween = false;
let checkedBox;
function handleClick(e) {
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((box) => {
      if (box == this || box == checkedBox) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        box.checked = true;
      }
    });
  }

  checkedBox = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});
