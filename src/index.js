import './css/home.css';
import './css/commentStyle.css';
import getAllShowsURL from './config.js';
import getAllShows from './api/getAllShows.js';
import displayHomeUI from './pageUI/displayHomeUI.js';
import loveImg from './images/love.png';
import commentUI from './pageUI/commentUI.js';
import commentCounter from './modules/comment/commentCounter.js';
import sendComment from './modules/comment/commentPostAPI.js';
import displayComment from './modules/comment/commentDisplay.js';

const bodyTag = document.querySelector('.home_body');

const HomeUI = () => {
  bodyTag.innerHTML = commentUI() + displayHomeUI();
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
  await homeCard1();
  await homeCard2();
  await homeCard3();
  await Tabselector();
});

// added for comment modal
const commentModal = async (commentbtnid, selectedcommentObject) => {
  const commentCount = document.getElementById('commentcount');
  const comment = document.getElementById('comment');
  
  ///////////////////////////////////////////////////////////
  const userNamecomment = document.getElementById('usernamecomment');
  const userComment= document.getElementById('usercomment');
/////////////////////////////////////////////////////////////
 
  const commentButton = document.getElementById('commentbutton');
  const commentPicture = document.getElementById('commentpicture');
  const commentName = document.getElementById('commentname');
  const commentLanguage = document.getElementById('commentlanguage');
  const commentStatus = document.getElementById('commentstatus');
  const commentAverageRuntime = document.getElementById('commentaverageRuntime');
  const commenttype = document.getElementById('commenttype');
  //const isCard1Active = homeSection1Tag.classList.contains('home_active');
  //const isCard2Active = homeSection2Tag.classList.contains('home_active');
  comment.style.display = 'block';
  // fetch data from api
  // count reservation
  commentCounter(commentbtnid, commentCount);
  // display reservation
  displayComment(commentbtnid);
  // reservation event handling
  // update  information

  commentPicture.src = selectedcommentObject.image.medium;
  commentName.innerHTML = selectedcommentObject.name;
  commentLanguage.innerHTML = `Language: ${selectedcommentObject.language}`;
  commentAverageRuntime.innerHTML = `AverageRuntime: ${selectedcommentObject.averageRuntime}`;
  commentStatus.innerHTML = `Status: ${selectedcommentObject.status}`;
  commenttype.innerHTML = `Type: ${selectedcommentObject.type}`;
  // else if (isCard2Active) {
  //   reservePicture.src = realityData.data[reservebtnid].image.medium;
  //   reserveName.innerHTML = realityData.data[reservebtnid].name;
  //   reserveLanguage.innerHTML = `Language: ${realityData.data[reservebtnid].language}`;
  //   reserveAverageRuntime.innerHTML = `AverageRuntime: ${realityData.data[reservebtnid].averageRuntime}`;
  //   reserveStatus.innerHTML = `Status: ${realityData.data[reservebtnid].status}`;
  //   reservetype.innerHTML = `Type: ${realityData.data[reservebtnid].type}`;
  // } else {
  //   reservePicture.src = animationData.data[reservebtnid].image.medium;
  //   reserveName.innerHTML = animationData.data[reservebtnid].name;
  //   reserveLanguage.innerHTML = `Language: ${animationData.data[reservebtnid].language}`;
  //   reserveAverageRuntime.innerHTML = `AverageRuntime: ${animationData.data[reservebtnid].averageRuntime}`;
  //   reserveStatus.innerHTML = `Status: ${animationData.data[reservebtnid].status}`;
  //   reservetype.innerHTML = `Type: ${animationData.data[reservebtnid].type}`;
  // }

  commentButton.addEventListener('click', async () => {
    if ( userNamecomment.value.trim() !== '' && userComment.value.trim() !== '') {
      const commentdata = {
        item_id: +commentbtnid,
        username:  userNamecomment.value.trim(),
        comment: userComment.value.trim(),
        
      };
      await sendComment(commentdata);
      userNamecomment.value = '';
      userComment.value = '';
      displayComment(commentbtnid);
      commentCounter(commentbtnid, commentCount);
    } else {
      commentbtnid.preventDefault();
    }
  });
};
  // close button for comment window
const closeCommentWindow = async () => {
  const commentClose = document.getElementById('commentclose');
  const comment = document.getElementById('comment');
  commentClose.addEventListener('click', () => {
    comment.style.display = 'none';
  });
};

bodyTag.addEventListener('click', async (e) => {
  const isCommentContain = e.target.classList.contains('comment_btn');
  const commentbtnid = e.target.id;
  const showcommentData = (await getAllShows(getAllShowsURL))[0];
  const realitycommentData = (await getAllShows(getAllShowsURL))[1];
  const animationcommentData = (await getAllShows(getAllShowsURL))[2];
  const isCardActive1 = homeSection1Tag.classList.contains('home_active');
  const isCardActive2 = homeSection2Tag.classList.contains('home_active');
  const isCardActive3 = homeSection3Tag.classList.contains('home_active');
  if (isCommentContain && isCardActive1) {
    const selectedcommentObject = showcommentData.data.find((item) => item.id === Number(commentbtnid));
    await commentModal(commentbtnid, selectedcommentObject);
    await closeCommentWindow();
  } if (isCommentContain && isCardActive2) {
    // eslint-disable-next-line max-len
    const selectedcommentObject =realitycommentData.realityGenre.find((item) => item.id === Number(commentbtnid));
    await commentModal(commentbtnid, selectedcommentObject);
    await closeCommentWindow();
  } if (isCommentContain && isCardActive3) {
    // eslint-disable-next-line max-len
    const selectedcommentObject = animationcommentData.animationGenre.find((item) => item.id === Number(commentbtnid));
    await commentModal(commentbtnid, selectedcommentObject);
    await closeCommentWindow();
  }
});

///////////////////// COMMENT ////////////////////////////////


