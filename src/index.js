import './css/home.css';
import './css/popup.css';
import loveImg from './images/love.png';
import { getAllShowsURL } from './modules/config.js';
import getAllShows from './modules/api/getAllShows.js';
import displayHomeUI from './modules/pageUI/displayHomeUI.js';
import getAllLikes from './modules/api/getAllLikes.js';
import postAllLikes from './modules/api/postAllLikes.js';
import commentPopupUI from './modules/pageUI/commentPopupUI.js';
import reservationPopupUI from './modules/pageUI/reservationPopupUI.js';
import displayComment from './modules/api/commentDisplay.js';
import displayReservation from './modules/api/reservationDisplay.js';
import sendReservation from './modules/api/reservationPostAPI.js';
import sendComment from './modules/api/commentPostAPI.js';

const bodyTag = document.querySelector('.home_body');

const HomeUI = () => {
  bodyTag.innerHTML = '';
  bodyTag.innerHTML = displayHomeUI();
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
  const { data } = (await getAllShows(getAllShowsURL))[1];
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
  const { data } = (await getAllShows(getAllShowsURL))[2];
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

window.addEventListener('load', async () => {
  await dynamicNav();
  await rerenderCards();
  await getAllLikes();
});

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

const clearCommentInputs = (nameInput, textareaInput) => {
  nameInput.value = '';
  textareaInput.value = '';
};

const clearReserveInputs = async (nameInput, startDateInput, endDateInput) => {
  nameInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
};

const submitComment = async (nameInput, textareaInput, id) => {
  const commentDetails = {
    item_id: id,
    username: nameInput.value,
    comment: textareaInput.value,
  };
  await sendComment(commentDetails);
  clearCommentInputs(nameInput, textareaInput);
};

const submitReservation = async (nameInput, startDateInput, endDateInput, id) => {
  const reservationDetails = {
    item_id: id,
    username: nameInput.value,
    date_start: startDateInput.value,
    date_end: endDateInput.value,
  };
  await sendReservation(reservationDetails);
  await clearReserveInputs(nameInput, startDateInput, endDateInput);
};

const validateCommentInput = async (nameInput, textareaInput, id) => {
  if (nameInput.value.trim() === '' || textareaInput.value.trim() === '') {
    nameInput.value = 'Enter name input';
    textareaInput.value = 'Enter value correctly';
  } else {
    await submitComment(nameInput, textareaInput, id);
  }
};

const validateReservationInput = async (nameInput, startDateInput, endDateInput, id) => {
  if (nameInput.value.trim() === '' || startDateInput.value.trim() === '' || endDateInput.value.trim() === '') {
    nameInput.value = 'Enter name input';
    endDateInput.value = 'Enter value correctly';
    endDateInput.value = 'Enter value correctly';
  } else {
    await submitReservation(nameInput, startDateInput, endDateInput, id);
  }
};

const reRenderCommentList = async (listBox, id) => {
  const listData = (await displayComment(id)).involvementsArr;
  let displayList = '';
  for (let i = 0; i < listData.length; i += 1) {
    displayList
    += `<li>
       ${listData[i].creation_date} - ${listData[i].username} - ${listData[i].comment}
      </li> `;
  }
  listBox.innerHTML = '';
  listBox.innerHTML = displayList;
};

const reRenderReserveList = async (listBox, id) => {
  const listData = (await displayReservation(id)).involvementsArr;
  let displayList = '';
  for (let i = 0; i < listData.length; i += 1) {
    displayList
    += `<li>
       ${listData[i].username} - ${listData[i].date_start} - ${listData[i].date_end}
      </li> `;
  }
  listBox.innerHTML = '';
  listBox.innerHTML = displayList;
};

const closePopup = async (closepopuptag, popupboxx) => {
  closepopuptag.addEventListener('click', () => {
    popupboxx.remove();
  });
};

bodyTag.addEventListener('click', async (e) => {
  const checkLikeBtn = e.target.classList.contains('like_btn');
  const checkCommentBtn = e.target.classList.contains('comment_btn');
  const checkReservationBtn = e.target.classList.contains('reserve_btn');

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

  if (checkCommentBtn) {
    const { id } = e.target;
    const movieObject = await displayComment(id);
    const commentPopUp = await commentPopupUI(movieObject);
    bodyTag.insertAdjacentHTML('beforeend', commentPopUp);
    const closePopupTag = document.querySelector('.close_popup');
    const form = document.querySelector('.popup_form');
    const listBox = document.querySelector('.comment_holder');
    const nameInput = document.querySelector('.nameInput');
    const textareaInput = document.querySelector('.textareaInput');
    const popUpBox = document.querySelector('.popup_container');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await validateCommentInput(nameInput, textareaInput, id);
      await reRenderCommentList(listBox, id);
    });
    await closePopup(closePopupTag, popUpBox);
  }

  if (checkReservationBtn) {
    const id = parseFloat(e.target.id);
    const movieObject = await displayReservation(id);
    const reservationPopUp = await reservationPopupUI(movieObject);
    bodyTag.insertAdjacentHTML('beforeend', reservationPopUp);
    const closePopupTag = document.querySelector('.close_popup');
    const form = document.querySelector('.popup_form');
    const listBox = document.querySelector('.comment_holder');
    const popUpBox = document.querySelector('.popup_container');
    const nameInput = document.querySelector('.nameInput');
    const startDateInput = document.querySelector('.startdateInput');
    const endDateInput = document.querySelector('.enddateInput');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await validateReservationInput(nameInput, startDateInput, endDateInput, id);
      await reRenderReserveList(listBox, id);
    });
    await closePopup(closePopupTag, popUpBox);
  }
});
