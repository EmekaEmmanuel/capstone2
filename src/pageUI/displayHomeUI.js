const displayHomeUI = () =>  `
<header class="home_header">

<div class="logo">
  <h1 class="font1">Cap <br> Flix </h1>
</div>

<nav class="nav_list">
  <li class="font2 nav_item tab_active" data-tab="1">
    All Shows <span class="home_span home_active span1 span_active"> 6</span>
  </li>

  <li class="font2 nav_item" data-tab="2">
    Blockbusters <span class="home_span home_hidden span2 span_active"> 6</span>
  </li>

  <li class="font2 nav_item"data-tab="3"'>
  Most Viewed <span class="home_span home_hidden span3 span_active"> 6</span>
  </li>
</nav>

</header>

<section class="home_section1 grid_container home_active"></section>
<section class="home_section2 grid_container home_hidden"></section>
<section class="home_section3 grid_container home_hidden"></section>

<footer class="home_footer">
<p class="font5">&#169; Created by Microverse students under CC BY-SA license</p>
</footer>
`;

export  {displayHomeUI};