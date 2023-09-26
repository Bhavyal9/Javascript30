const wordList = [];

const secretKey = "secret";
const checkKey = (e) => {
  wordList.push(e.key);
  wordList.splice(-secretKey.length, wordList.length - secretKey.length);
  if (wordList.join("") == secretKey) {
    console.log("Yahooo");
    cornify_add();
  }
};

window.addEventListener("keydown", checkKey);
