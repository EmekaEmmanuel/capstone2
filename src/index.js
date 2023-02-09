import './css/home.css';
import './css/reservationStyle.css';
import { getAllShowsURL } from './config.js';
import getAllShows from './api/getAllShows.js';
import { displayHomeUI } from './pageUI/displayHomeUI.js';
import loveImg from './images/love.png';
import reservationUI from './pageUI/reservationUI.js';
import reservationCounter from './modules/reservation/reservationCounter.js';
import sendReservation from './modules/reservation/reservationPostAPI.js';
import displayReservation from './modules/reservation/reservationDisplay.js';

const bodyTag = document.querySelector('.home_body');

const HomeUI = () => {
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
  homeSection1Tag.innerHTML = articletemp;
};

const homeCard2 = async () => {
  const data = (await getAllShows(getAllShowsURL))[1].realityGenre;
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
  homeSection2Tag.innerHTML = articletemp;
};

const homeCard3 = async () => {
  const data = (await getAllShows(getAllShowsURL))[2].animationGenre;
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
  homeSection3Tag.innerHTML = articletemp;
};

const Tabselector = async (cardActive) => {
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
  await homeCard1();
  await homeCard2();
  await homeCard3();
  await Tabselector();
  const reservationCount = document.getElementById('reservationcount');
  const reservationButton = document.querySelectorAll('.reserve_btn');
  const reservation = document.getElementById('reservation');
  const reservationClose = document.getElementById('reservationclose');
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
  const [showData, realityData, animationData] = await getAllShows(getAllShowsURL);

  const isCard1Active = homeSection1Tag.classList.contains('home_active');
  const isCard2Active = homeSection2Tag.classList.contains('home_active');

  // reservation modal implementation
  const reservationModal = async () => {
    reservationButton.forEach((reservebtn) => {
      reservebtn.addEventListener('click', async (e) => {
        reservation.style.display = 'block';
        // fetch data from api
        // count reservation
        reservationCounter(e.target.id, reservationCount);
        // display reservation
        displayReservation(e.target.id);
        // reservation event handling
        // update  information
        if (isCard1Active) {
          reservePicture.src = showData.data[e.target.id - 1].image.medium;
          reserveName.innerHTML = showData.data[e.target.id - 1].name;
          reserveLanguage.innerHTML = `Language: ${showData.data[e.target.id - 1].language}`;
          reserveAverageRuntime.innerHTML = `AverageRuntime: ${showData.data[e.target.id - 1].averageRuntime}`;
          reserveStatus.innerHTML = `Status: ${showData.data[e.target.id - 1].status}`;
          reservetype.innerHTML = `Type: ${showData.data[e.target.id - 1].type}`;
        } else if (isCard2Active) {
          reservePicture.src = realityData.data[e.target.id - 1].image.medium;
          reserveName.innerHTML = realityData.data[e.target.id - 1].name;
          reserveLanguage.innerHTML = `Language: ${realityData.data[e.target.id - 1].language}`;
          reserveAverageRuntime.innerHTML = `AverageRuntime: ${realityData.data[e.target.id - 1].averageRuntime}`;
          reserveStatus.innerHTML = `Status: ${realityData.data[e.target.id - 1].status}`;
          reservetype.innerHTML = `Type: ${realityData.data[e.target.id - 1].type}`;
        } else {
          reservePicture.src = animationData.data[e.target.id - 1].image.medium;
          reserveName.innerHTML = animationData.data[e.target.id - 1].name;
          reserveLanguage.innerHTML = `Language: ${animationData.data[e.target.id - 1].language}`;
          reserveAverageRuntime.innerHTML = `AverageRuntime: ${animationData.data[e.target.id - 1].averageRuntime}`;
          reserveStatus.innerHTML = `Status: ${animationData.data[e.target.id - 1].status}`;
          reservetype.innerHTML = `Type: ${animationData.data[e.target.id - 1].type}`;
        }

        reserveButton.addEventListener('click', async () => {
          console.log(e.target.id);
          if (userName.value.trim() !== '' && startDate.value.trim() !== '' && endDate.value.trim() !== '') {
            const reservationdata = {
              item_id: +e.target.id,
              username: userName.value.trim(),
              date_start: startDate.value.trim(),
              date_end: endDate.value.trim(),
            };
            await sendReservation(reservationdata);
            userName.value = '';
            startDate.value = '';
            endDate.value = '';
            displayReservation(e.target.id);
            reservationCounter(e.target.id, reservationCount);
          } else {
            e.preventDefault();
          }
        });
      });
    });
  };

  // close button for reservation window
  const closeReservationWindow = () => {
    reservationClose.addEventListener('click', () => {
      reservation.style.display = 'none';
    });
  };
  reservationModal();
  closeReservationWindow();
});

// added for reservation modal
