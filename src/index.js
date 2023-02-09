import './css/home.css';
import { getAllShowsURL } from './config.js';
import getAllShows from './api/getAllShows.js';
import { displayHomeUI } from './pageUI/displayHomeUI.js'
import loveImg from './images/love.png'
import getAllLikes from './api/getAllLikes.js'; 
import postAllLikes from './api/postAllLikes.js'; 

let bodyTag = document.querySelector('.home_body')

const HomeUI = () => {
  bodyTag.innerHTML = displayHomeUI()
}

HomeUI()

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
  let likeData = await getAllLikes()
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (y.item_id == x.id) {
        x.like = y.likes
      }
    })
  })
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
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${loveImg} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? "like" : "likes"} </p>
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
  let data = (await getAllShows(getAllShowsURL))[1].realityGenre;
  let likeData = await getAllLikes()
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (y.item_id == x.id) {
        x.like = y.likes
      }
    })
  })
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
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${loveImg} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? "like" : "likes"} </p>
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
  let data = (await getAllShows(getAllShowsURL))[2].animationGenre;
  let likeData = await getAllLikes()
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (y.item_id == x.id) {
        x.like = y.likes
      }
    })
  })
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
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${loveImg} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? "like" : "likes"} </p>
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

const rerenderCards = async () => {
  await homeCard1()
  await homeCard2()
  await homeCard3()
}

window.addEventListener('load', async () => {
  await dynamicNav()
  await rerenderCards()
  await getAllLikes()
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

bodyTag.addEventListener("click", async (e) => { 
  let checkLikeBtn = e.target.classList.contains('like_btn');
  if (checkLikeBtn) {
    const clickedLike = e.target; 
    let id = clickedLike.dataset.tab 
    let countUI = document.querySelector(`.count${id}`) 
    let countObj = { "item_id": id }
    await postLike(countObj)
    await getAllLikes()
    await displayCardCount(countUI, id)
    await rerenderCards()
  }
})

const postLike = async (countObj) => {
  await postAllLikes(countObj)
}

const displayCardCount = async (countUI, id) => {
  let likeArray = await getAllLikes()  
  likeArray.filter((item) => {
    if (item.item_id === id) {
      let { likes } = item 
      return countUI.innerHTML = likes
    }
  })
}
