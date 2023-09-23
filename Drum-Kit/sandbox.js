let boxes = document.querySelectorAll("p");

const playMusic = (sound) => {
  var audio = new Audio(`sounds/${sound.toLowerCase()}.wav`);
  audio.currentTime = 0;
  audio.play();
};

function makeSound(event) {
  this.parentElement.classList.add("play");
  setTimeout(() => {
    this.parentElement.classList.remove("play");
  }, 500);
  let sound = event.currentTarget.innerText.split("\n");
  playMusic(sound[1]);
}

function play(e) {
  console.this;
  let divBox = document.querySelector(`#${e.key}`);
  if (divBox) {
    divBox.parentElement.classList.add("play");
    setTimeout(() => {
      divBox.parentElement.classList.remove("play");
    }, 500);
    let sound = divBox.innerText.split("\n");
    playMusic(sound[1]);
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", makeSound);
});

window.addEventListener("keydown", play);
