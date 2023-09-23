const panel = Array.from(document.querySelectorAll(".panel"));

function handleClick(e) {
  const sec = e.currentTarget;
  sec.childNodes[1].style.transform = "translateY(0)";
  sec.childNodes[5].style.transform = "translateY(0)";
  sec.style.flexGrow = "3";
}

function endTransition(e) {
  const sec = e.currentTarget;
  sec.childNodes[1].style.transform = "";
  sec.childNodes[5].style.transform = "";
  sec.style.flexGrow = "";
}

panel.forEach((p) => {
  p.addEventListener("mouseover", handleClick);
  p.addEventListener("mouseout", endTransition);
});
