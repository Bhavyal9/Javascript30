const nav = document.querySelector("#main");
const navTop = nav.offsetTop;

console.log(nav.offsetHeight);
function handleScroll() {
  if (window.scrollY >= navTop) {
    console.log(window.scrollY, navTop);
    document.body.classList.add("fixed");
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.classList.remove("fixed");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", handleScroll);
