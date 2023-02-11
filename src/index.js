import './css/home.css';
import './css/reservationStyle.css';
import './css/commentStyle.css';
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
import commentUI from './pageUI/commentUI.js';
import commentCounter from './modules/comment/commentCounter.js';
import sendComment from './modules/comment/commentPostAPI.js';
import displayComment from './modules/comment/commentDisplay.js';

const bodyTag = document.querySelector('.home_body');

const HomeUI = () => {
  bodyTag.innerHTML = '';
  bodyTag.innerHTML = reservationUI() + commentUI() + displayHomeUI();
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
// close button for reservation window

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

  // display reservation
  // reservation event handling
  // update  information

  reservePicture.src = selectedObject.image.original;
  reserveName.innerHTML = selectedObject.name;
  reserveLanguage.innerHTML = `Language: ${selectedObject.language}`;
  reserveAverageRuntime.innerHTML = `AverageRuntime: ${selectedObject.averageRuntime}`;
  reserveStatus.innerHTML = `Status: ${selectedObject.status}`;
  reservetype.innerHTML = `Type: ${selectedObject.type}`;

  reserveButton.addEventListener('click', async (e) => {
    if (userName.value.trim() !== '' && startDate.value.trim() !== '' && endDate.value.trim() !== '') {
      await sendReservation({
        item_id: +reservebtnid,
        username: userName.value.trim(),
        date_start: startDate.value.trim(),
        date_end: endDate.value.trim(),
      });
      userName.value = '';
      startDate.value = '';
      endDate.value = '';
      await displayReservation(reservebtnid);
      await reservationCounter(reservebtnid, reservationCount);
    } else {
      e.preventDefault();
    }
  }, { once: false });
};
const closeReservationWindow = () => {
  const reservationClose = document.getElementById('reservationclose');
  const reservation = document.getElementById('reservation');
  reservationClose.addEventListener('click', () => {
    window.location.reload();
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

const commentModal = async (commentbtnid, selectedcommentObject) => {
  const commentCount = document.getElementById('commentcount');
  const comment = document.getElementById('comment');
  const userNamecomment = document.getElementById('usernamecomment');
  const userComment = document.getElementById('usercomment');
  const commentButton = document.getElementById('commentbutton');
  const commentPicture = document.getElementById('commentpicture');
  const commentName = document.getElementById('commentname');
  const commentLanguage = document.getElementById('commentlanguage');
  const commentStatus = document.getElementById('commentstatus');
  const commentAverageRuntime = document.getElementById('commentaverageRuntime');
  const commenttype = document.getElementById('commenttype');
  comment.style.display = 'block';

  // reservation event handling
  // update  information

  commentPicture.src = selectedcommentObject.image.original;
  commentName.innerHTML = selectedcommentObject.name;
  commentLanguage.innerHTML = `Language: ${selectedcommentObject.language}`;
  commentAverageRuntime.innerHTML = `AverageRuntime: ${selectedcommentObject.averageRuntime}`;
  commentStatus.innerHTML = `Status: ${selectedcommentObject.status}`;
  commenttype.innerHTML = `Type: ${selectedcommentObject.type}`;
  commentButton.addEventListener('click', async () => {
    if (userNamecomment.value.trim() !== '' && userComment.value.trim() !== '') {
      await sendComment({
        item_id: +commentbtnid,
        username: userNamecomment.value.trim(),
        comment: userComment.value.trim(),

      });
      userNamecomment.value = '';
      userComment.value = '';

      await displayComment(commentbtnid);
      await commentCounter(commentbtnid, commentCount);
    } else {
      commentbtnid.preventDefault();
    }
  }, { once: false });
};

const closeCommentWindow = () => {
  const commentClose = document.getElementById('commentclose');
  const comment = document.getElementById('comment');
  commentClose.addEventListener('click', () => {
    window.location.reload();
    comment.style.display = 'none';
  });
};

bodyTag.addEventListener('click', async (e) => {
  const checkLikeBtn = e.target.classList.contains('like_btn');

  const isReserveContain = e.target.classList.contains('reserve_btn');
  const reservebtnid = e.target.id;
  const show = (await getAllShows(getAllShowsURL))[0];
  const reality = (await getAllShows(getAllShowsURL))[1];
  const animation = (await getAllShows(getAllShowsURL))[2];
  const isCard1Active = homeSection1Tag.classList.contains('home_active');
  const isCard2Active = homeSection2Tag.classList.contains('home_active');
  const isCard3Active = homeSection3Tag.classList.contains('home_active');

  const isCommentContain = e.target.classList.contains('comment_btn');
  const commentbtnid = e.target.id;
  const isCardActive1 = homeSection1Tag.classList.contains('home_active');
  const isCardActive2 = homeSection2Tag.classList.contains('home_active');
  const isCardActive3 = homeSection3Tag.classList.contains('home_active');

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
    const reservationCount = document.getElementById('reservationcount');
    if (isCard1Active) {
      const reservation = show.data.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, reservation);
      await displayReservation(reservebtnid);
      await reservationCounter(reservebtnid, reservationCount);
      return false;
    }
    if (isCard2Active) {
      const reservation = reality.realityGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, reservation);
      await displayReservation(reservebtnid);
      await reservationCounter(reservebtnid, reservationCount);
      return false;
    }
    if (isCard3Active) {
      const reservation = animation.animationGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, reservation);
      await displayReservation(reservebtnid);
      await reservationCounter(reservebtnid, reservationCount);
      return false;
    }
  }

  if (isCommentContain) {
    const commentCount = document.getElementById('commentcount');
    if (isCardActive1) {
      const comment = show.data.find((item) => item.id === Number(commentbtnid));
      await commentModal(commentbtnid, comment);
      await displayComment(commentbtnid);
      await commentCounter(commentbtnid, commentCount);
      return false;
    }

    if (isCardActive2) {
      const comment = reality.realityGenre.find((item) => item.id === Number(commentbtnid));
      await commentModal(commentbtnid, comment);
      await displayComment(commentbtnid);
      await commentCounter(commentbtnid, commentCount);
      return false;
    }
    if (isCardActive3) {
      const comment = animation.animationGenre.find((item) => item.id === Number(commentbtnid));
      await commentModal(commentbtnid, comment);
      await displayComment(commentbtnid);
      await commentCounter(commentbtnid, commentCount);
      return false;
    }
  }
  return false;
});
closeCommentWindow();
closeReservationWindow();