const simonGame = document.getElementById('simon-game');
const anagramJS = document.getElementById('anagramJS');
const anagramRE = document.getElementById('anagramRE');

const openLinkS = () => {
  window.open('https://simon-game-marko.netlify.app', '_blank');
  window.open('https://simon-game-marko.netlify.app');
};
const openLinkAjs = () => {
  window.open('https://github.com/marko111h/AnagramJs', '_blank');
  window.open('https://github.com/marko111h/AnagramJs');
};
const openLinkAre = () => {
  window.open('https://anagram-re.netlify.app/', '_blank');
  window.open('https://anagram-re.netlify.app/');
};

simonGame.addEventListener('click', openLinkS);
anagramJS.addEventListener('click', openLinkAjs);
anagramRE.addEventListener('click', openLinkAre);
