import './css/home.css';
import './css/reservationStyle.css';
import { getAllShowsURL } from './config.js';
import getAllShows from './api/getAllShows.js';
import displayHomeUI from './pageUI/displayHomeUI.js';
import loveImg from './images/love.png';
import getAllLikes from './api/getAllLikes.js';
import postAllLikes from './api/postAllLikes.js';
import reservationUI from './pageUI/reservationUI.js';
import reservationCounter from './modules/reservation/reservationCounter.js';
import sendReservation from './modules/reservation/reservationPostAPI.js';
import displayReservation from './modules/reservation/reservationDisplay.js';

const bodyTag = document.querySelector('.home_body');

const HomeUI = () => {
  bodyTag.innerHTML = '';
  bodyTag.innerHTML = reservationUI() + displayHomeUI();
};

HomeUI();

const navTag = document.querySelector('.nav_list');
const homeSection1Tag = document.querySelector('.home_section1');
const homeSection2Tag = document.querySelector('.home_section2');
const homeSection3Tag = document.querySelector('.home_section3');

const activateClickedSpan = (par) => {
  par.classList.add('home_active');
  par.classList.remove('home_hidden');
};

const activateClickedSection = (par) => {
  par.classList.add('home_active');
  par.classList.remove('home_hidden');
};

const spanActiveRemove = () => {
  const spanTags = document.querySelectorAll('.home_span');
  spanTags.forEach((span) => {
    span.classList.remove('home_active');
    span.classList.add('home_hidden');
  });
};

const sectionActiveRemove = () => {
  const sectionTags = document.querySelectorAll('.grid_container');
  sectionTags.forEach((section) => {
    section.classList.remove('home_active');
    section.classList.add('home_hidden');
  });
};

const dynamicNav = async () => {
  const data = (await getAllShows(getAllShowsURL));
  let navtemp = '';
  for (let i = 0; i < data.length; i += 1) {
    navtemp
      += `
<li class="font2 nav_item tab_active" data-tab=${i + 1}>
${`${data[i].title} `}<span class="home_span ${i === 0 ? 'home_active' : ''} span${i + 1} span_active">(${data[i].total})</span>
</li>`;
  }
  navTag.innerHTML = navtemp;
};

const homeCard1 = async () => {
  const { data } = (await getAllShows(getAllShowsURL))[0];
  const likeData = await getAllLikes();
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (parseFloat(y.item_id) === x.id) {
        x.like = y.likes;
      }
    });
  });
  let articletemp = '';
  for (let i = 0; i < data.length; i += 1) {
    articletemp
      += `<article class="home_article" key=${data[i].id}> 
<figure>
 <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure>

<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div>

  <div>
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${loveImg} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? 'like' : 'likes'} </p>
</div>
</div>

<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;
  }
  homeSection1Tag.innerHTML = articletemp;
};

const homeCard2 = async () => {
  const data = (await getAllShows(getAllShowsURL))[1].realityGenre;
  const likeData = await getAllLikes();
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (parseFloat(y.item_id) === x.id) {
        x.like = y.likes;
      }
    });
  });
  let articletemp = '';
  for (let i = 0; i < data.length; i += 1) {
    articletemp
      += `<article class="home_article" key=${data[i].id}> 
<figure>
   <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure>

<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div>

  <div>
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${loveImg} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? 'like' : 'likes'} </p>
</div>
</div>

<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;
  }
  homeSection2Tag.innerHTML = articletemp;
};

const homeCard3 = async () => {
  const data = (await getAllShows(getAllShowsURL))[2].animationGenre;
  const likeData = await getAllLikes();
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (parseFloat(y.item_id) === x.id) {
        x.like = y.likes;
      }
    });
  });
  let articletemp = '';
  for (let i = 0; i < data.length; i += 1) {
    articletemp
      += `<article class="home_article" key=${data[i].id}> 
<figure>
  <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure> 
<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div> 
  <div>
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${loveImg} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? 'like' : 'likes'} </p>
</div>
</div> 
<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;
  }
  homeSection3Tag.innerHTML = articletemp;
};

const rerenderCards = async () => {
  await homeCard1();
  await homeCard2();
  await homeCard3();
};

const Tabselector = async () => {
  navTag.addEventListener('click', async (e) => {
    const clicked = e.target.closest('.nav_item');
    const clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`);
    const clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`);
    spanActiveRemove();
    activateClickedSpan(clickedSpan);
    sectionActiveRemove();
    activateClickedSection(clickedSection);
  });
};

window.addEventListener('load', async () => {
  await dynamicNav();
  await rerenderCards();
  await getAllLikes();
  await Tabselector();
});

// added for reservation modal
const reservationModal = async (reservebtnid, selectedObject) => {
  const reservationCount = document.getElementById('reservationcount');
  const reservation = document.getElementById('reservation');
  const userName = document.getElementById('username');
  const startDate = document.getElementById('startdate');
  const endDate = document.getElementById('enddate');
  const reserveButton = document.getElementById('reservebutton');
  const reservePicture = document.getElementById('reservepicture');
  const reserveName = document.getElementById('reservename');
  const reserveLanguage = document.getElementById('reservelanguage');
  const reserveStatus = document.getElementById('reservestatus');
  const reserveAverageRuntime = document.getElementById('reserveaverageRuntime');
  const reservetype = document.getElementById('reservetype');
  reservation.style.display = 'block';
  // fetch data from api
  // count reservation
  reservationCounter(reservebtnid, reservationCount);
  // display reservation
  displayReservation(reservebtnid);
  // reservation event handling
  // update  information

  reservePicture.src = selectedObject.image.original;
  reserveName.innerHTML = selectedObject.name;
  reserveLanguage.innerHTML = `Language: ${selectedObject.language}`;
  reserveAverageRuntime.innerHTML = `AverageRuntime: ${selectedObject.averageRuntime}`;
  reserveStatus.innerHTML = `Status: ${selectedObject.status}`;
  reservetype.innerHTML = `Type: ${selectedObject.type}`;
  reserveButton.addEventListener('click', async () => {
    if (userName.value.trim() !== '' && startDate.value.trim() !== '' && endDate.value.trim() !== '') {
      const reservationdata = {
        item_id: +reservebtnid,
        username: userName.value.trim(),
        date_start: startDate.value.trim(),
        date_end: endDate.value.trim(),
      };
      await sendReservation(reservationdata);
      userName.value = '';
      startDate.value = '';
      endDate.value = '';
      displayReservation(reservebtnid);
      reservationCounter(reservebtnid, reservationCount);
    } else {
      reservebtnid.preventDefault();
    }
  });
};
  // close button for reservation window
const closeReservationWindow = async () => {
  const reservationClose = document.getElementById('reservationclose');
  const reservation = document.getElementById('reservation');
  reservationClose.addEventListener('click', () => {
    reservation.style.display = 'none';
  });
};

navTag.addEventListener('click', async (e) => {
  const clicked = e.target.closest('.nav_item');
  const clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`);
  const clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`);
  spanActiveRemove();
  activateClickedSpan(clickedSpan);
  sectionActiveRemove();
  activateClickedSection(clickedSection);
});

const postLike = async (countObj) => {
  await postAllLikes(countObj);
};

const displayCardCount = async (countUI, id) => {
  const likeArray = await getAllLikes();
  likeArray.filter((item) => {
    if (item.item_id === id) {
      const { likes } = item;
      countUI.innerHTML = likes;
    }
    return countUI;
  });
};

bodyTag.addEventListener('click', async (e) => {
  const checkLikeBtn = e.target.classList.contains('like_btn');

  const isReserveContain = e.target.classList.contains('reserve_btn');
  const reservebtnid = e.target.id;
  const showData = (await getAllShows(getAllShowsURL))[0];
  const realityData = (await getAllShows(getAllShowsURL))[1];
  const animationData = (await getAllShows(getAllShowsURL))[2];
  const isCard1Active = homeSection1Tag.classList.contains('home_active');
  const isCard2Active = homeSection2Tag.classList.contains('home_active');
  const isCard3Active = homeSection3Tag.classList.contains('home_active');

  if (checkLikeBtn) {
    const clickedLike = e.target;
    const id = clickedLike.dataset.tab;
    const countUI = document.querySelector(`.count${id}`);
    const countObj = { item_id: id };
    await postLike(countObj);
    await getAllLikes();
    await displayCardCount(countUI, id);
    await rerenderCards();
  }

  if (isReserveContain) {
    if (isCard1Active) {
      const selectedObject = showData.data.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, selectedObject);
      await closeReservationWindow();
    }
    if (isCard2Active) {
      // eslint-disable-next-line max-len
      const selectedObject = realityData.realityGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, selectedObject);
      await closeReservationWindow();
    }
    if (isCard3Active) {
      // eslint-disable-next-line max-len
      const selectedObject = animationData.animationGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, selectedObject);
      await closeReservationWindow();
    }
  }
});
