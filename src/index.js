import './style.css';

import Github from './images/github.svg';

const loadGithubIcon = () => {
  const github = document.getElementById('github');
  github.src = Github;
  github.alt = 'github';
  github.setAttribute('class', 'github-icon');
  const github1 = document.getElementById('github1');
  github1.src = Github;
  github1.alt = 'github';
  github1.setAttribute('class', 'github-icon');
  const github2 = document.getElementById('github2');
  github2.src = Github;
  github2.alt = 'github';
  github2.setAttribute('class', 'github-icon');
};

window.onload = () => {
  loadGithubIcon();
};
