function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}
const titulo = document.querySelector("h1");
typeWriter(titulo);

let txtHeader = document.querySelector("h1");
let playBtn = document.querySelector("button#btnStartGame");
let randomPlay = document.querySelector("div.box");
let cardOne = document.getElementById("card-01");

function loadOfGame() {
  // txtHeader
  txtHeader.style.marginTop = "40px";
  txtHeader.style.transition = "3s";
  //playBtn
  playBtn.style.opacity = "100";
  playBtn.style.transition = "2s";
}

function start() {
  let box = document.getElementById("sectionBox");
  // Box
  box.style.margin = "-8em";
  box.style.transition = "2.5s";
  // txtHeader
  txtHeader.innerHTML = "Where is the joke card ?";
  txtHeader.style.transition = "2s";
  // playBtn
  playBtn.style.opacity = "0";
  playBtn.style.transition = "2s";
}

function joke_Card() {
  let jokeCardIcon = document.querySelector("i#jokeCardIcon");
  let jokeCard = document.getElementById("jokeCard");
  // jokeCard
  jokeCard.style.backgroundImage = "url(../img/joker.png)";
  jokeCard.style.backgroundSize = "cover";
  jokeCard.style.backgroundPositionY = "-10px";
  jokeCard.style.transform = "rotateY(360deg)";
  jokeCard.style.transition = "1s";
  // jokeCardIcon
  jokeCardIcon.style.display = "none";
  txtHeader.innerHTML = "Great! you found the wildcard.";
}
