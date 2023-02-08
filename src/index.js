import './css/home.css';
import { getAllShowsURL } from './config.js';
import getAllShows from './api/getAllShows.js';
import { displayHomeUI } from './pageUI/displayHomeUI.js'
import loveImg from './images/love.png'

let bodyTag = document.querySelector('.home_body')

const initializeHomeUI = () => {
  bodyTag.innerHTML = displayHomeUI()
}

initializeHomeUI()
let navTag = document.querySelector('.nav_list')
let homeSection1Tag = document.querySelector('.home_section1')
let homeSection2Tag = document.querySelector('.home_section2')
let homeSection3Tag = document.querySelector('.home_section3')

const activateClickedSpan = (par) => {
  par.classList.add("home_active")
  par.classList.remove("home_hidden")
}

const activateClickedSection = (par) => {
  par.classList.add("home_active")
  par.classList.remove("home_hidden")
}

const spanActiveRemove = () => {
  let spanTags = document.querySelectorAll(".home_span")
  spanTags.forEach((span) => {
    span.classList.remove("home_active")
    span.classList.add("home_hidden")
  })
}

const sectionActiveRemove = () => {
  let sectionTags = document.querySelectorAll(".grid_container")
  sectionTags.forEach((section) => { 
    section.classList.remove("home_active")
    section.classList.add("home_hidden")
  }) 
}

const dynamicNav = async () => {
  let data = (await getAllShows(getAllShowsURL))
  let navtemp = ""
  for (let i = 0; i < data.length; i += 1) { 
    navtemp +=
      `
<li class="font2 nav_item tab_active" data-tab=${i + 1}>
${data[i].title + " "}<span class="home_span ${i === 0 ? "home_active" : ''} span${i + 1} span_active">(${data[i].total})</span>
</li>`; 
  }
  navTag.innerHTML = navtemp
}

const homeCard1 = async () => {
  let data = (await getAllShows(getAllShowsURL))[0].data 
  let articletemp = ""
  for (let i = 0; i < data.length; i += 1) { 
    articletemp +=
      `<article class="home_article" key=${data[i].id}> 
<figure>
 <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure>

<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div>

  <div>
    <img id=${data[i].id} class="like_btn" src=${loveImg} alt="">
    <p class="font4"><span class="count">5</span> likes </p>
  </div>
</div>

<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;

  }
  homeSection1Tag.innerHTML = articletemp
}

const homeCard2 = async () => {
  let data = (await getAllShows(getAllShowsURL))[1].realityGenre 
  let articletemp = ""
  for (let i = 0; i < data.length; i += 1) { 
    articletemp +=
      `<article class="home_article" key=${data[i].id}> 
<figure>
   <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure>

<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div>

  <div>
    <img id=${data[i].id} class="like_btn" src=${loveImg} alt="">
    <p class="font4"><span class="count">5</span> likes </p>
  </div>
</div>

<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`; 
  }
  homeSection2Tag.innerHTML = articletemp  
}

const homeCard3 = async () => {
  let data = (await getAllShows(getAllShowsURL))[2].animationGenre 
  let articletemp = ""
  for (let i = 0; i < data.length; i += 1) { 
    articletemp +=
      `<article class="home_article" key=${data[i].id}> 
<figure>
  <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure> 
<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div> 
  <div>
    <img id=${data[i].id} class="like_btn" src=${loveImg} alt="">
    <p class="font4"><span class="count">5</span> likes </p>
  </div>
</div> 
<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`; 
  }
  homeSection3Tag.innerHTML = articletemp 
}

// listBody.addEventListener('click', (e) => {
//   const checkClickedBtn = e.target.classList.contains('remove_btn');
//   const checkEditBtn = e.target.classList.contains('describ');
//   const checkCheckBox = e.target.classList.contains('checkbox_tag');
//   if (checkClickedBtn) {
//     const clicked = e.target;
//     this.removeToDo(clicked);
//   }
//   if (checkEditBtn) {
//     const clickCheckEditBtn = e.target;
//     this.updateDescriptions(clickCheckEditBtn);
//   }
//   if (checkCheckBox) {
//     const clickCheckBoxBtn = e.target;
//     this.updateTaskStatus(clickCheckBoxBtn);
//   }
// });

// let likeBtn = document.querySelector('.like_btn')
// console.log(likeBtn)
// let countTag = document.querySelector('.count')
// let count = countTag.innerHTML
// let countValue = parseFloat(count)
// let updateCount = countValue

// const increaseLike = (value) => {
//   console.log(value)
//   let likeCount = value + 1
//   updateCount = likeCount
//   console.log(updateCount)
// }

// let displayCountHtml = () => {
//   countTag.innerHTML = ""
//   countTag.innerHTML = updateCount
// }

// likeBtn.addEventListener('click', () => {
//   increaseLike(updateCount)
//   displayCountHtml()
// })


window.addEventListener('load', async () => {
  await dynamicNav()
  await homeCard1()
  await homeCard2()
  await homeCard3()  
})

navTag.addEventListener("click", async (e) => { 
  let clicked = e.target.closest('.nav_item') 
  let clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`)
  let clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`)
  spanActiveRemove()
  activateClickedSpan(clickedSpan)
  sectionActiveRemove()
  activateClickedSection(clickedSection) 
}) 
