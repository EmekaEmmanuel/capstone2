import githubIcon from '../../images/github.svg';

const displayHomeUI = () => `
<header class="home_header">

<div class="logo">
  <h1 class="font1">Cap <br> Flix </h1>
</div>

<nav class="nav_list">
 
</nav>

</header>

<section class="home_section1 grid_container home_active"></section>
<section class="home_section2 grid_container home_hidden"></section>
<section class="home_section3 grid_container home_hidden"></section>

<footer class="home_footer">
<p class="font5">&#169; Created by Microverse students;  <a href="https://github.com/EmekaEmmanuel" target="_blank"
><strong
  >Emeka Emmanuel<span><img class="githubicon" src=${githubIcon} alt="" id="github1" /></span></strong
></a>
<a href="https://github.com/jugosack" target="_blank"
><strong
  > Zewdu<span><img class="githubicon" src=${githubIcon} alt="" id="github1" /></span></strong
></a>
<a href="https://github.com/zewdu444" target="_blank"
><strong
  > Jugoslav<span><img class="githubicon" src=${githubIcon} alt="" id="github1" /></span></strong
></a>
 under CC BY-SA license</p> 
</footer>
`;

export default displayHomeUI;