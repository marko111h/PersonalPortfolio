const simonGame = document.getElementById('simon-game');
const anagramJS = document.getElementById('anagramJS');
const anagramRE = document.getElementById('anagramRE');

const openLinkS = () => {
  window.open('https://github.com/marko111h/Simon-Game', '_blank');
  window.open('https://github.com/marko111h/Simon-Game');
};
const openLinkAjs = () => {
  window.open('https://github.com/marko111h/AnagramJs', '_blank');
  window.open('https://github.com/marko111h/AnagramJs');
};
const openLinkAre = () => {
  window.open('https://github.com/marko111h/AnagramRE', '_blank');
  window.open('https://github.com/marko111h/AnagramRE');
};

simonGame.addEventListener('click', openLinkS);
anagramJS.addEventListener('click', openLinkAjs);
anagramRE.addEventListener('click', openLinkAre);