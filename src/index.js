import './css/home.css';
import { getAllShowsURL } from './config.js';
import getAllShows from './api/getAllShows.js';
import { displayHomeUI } from './pageUI/displayHomeUI.js'
import loveImg from './images/love.png'

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




navTag.addEventListener("click", async (e) => { 
  let clicked = e.target.closest('.nav_item') 
  let clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`)
  let clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`)
  spanActiveRemove()
  activateClickedSpan(clickedSpan)
  sectionActiveRemove()
  activateClickedSection(clickedSection) 
}) 

////////// JUGOSLAV ///////////////////////////


/////////////////////////////////////


window.addEventListener('load', async () => {
  await dynamicNav()
  await homeCard1()
  await homeCard2()
  await homeCard3()  

  const popupContent = document.querySelector('.commentPop');
  const commentBtns = document.querySelectorAll('.comment_btn');
  const greyScreen = document.querySelector('.greyblackScreen');
 
  ///////////Jugoslav/////////////
  let list = [];
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  list = [];
  for (let i = 10; i < 18; i += 1) {
    list.push(data[i]);
  }
};

const commentPopups = async () => {
  
  //await getData();
 // await display();
 await homeCard1()
  await homeCard2()
  await homeCard3()  
 

  commentBtns.forEach((btn, id) => {
    btn.addEventListener('click', () => {
      greyScreen.classList.add('greyblackScreen');
      greyScreen.style.display = 'block';
      popupContent.style.display = 'block';

      popupContent.innerHTML = `
          <div class="innerContent">
          <div class="button-container"> 
          <button type="button" class="Xmark" >&#10008;</button></div>
          <div class="img-info-container">
           <div class="img-container"><img src="${list[id].image.original}" alt=""/></div>
           <div class="info"> 
              <h2 class="film-title">${list[id].name}</h2>
              <div class="data">
                <div>
                  <p>Genres : ${list[id].genres}</p>
                  <p>Premiered: ${list[id].premiered}</p>
                </div>
                <div>
                  <p>Runtime : ${list[id].runtime}</p>
                  <p>Rating : ${list[id].rating.average}</p>
                </div>
              </div>
             <div>
                <h2 class="comment-list">Comments <span class="count"></span> </h2>
                <div class="allComments"></div>
              </div>
                <h2 class="add-comment">Add comment</h2>
                <form class="form1" id="${id}"  action="#"> 
                <input  id="user_name"  type="text" required placeholder=" Your Name">   
                <textarea id="user_comment" required  placeholder=" Kindly add a comment..." ></textarea>
                 <button type="submit"> Comment </button> 
                 </form> 
                </div>
            </div>
      </div>
        `;

      const Xmark = document.querySelectorAll('.Xmark');
      Xmark.forEach((X) => {
        X.addEventListener('click', () => {
          popupContent.style.display = 'none';
          greyScreen.classList.remove('greyblackScreen');
          greyScreen.style.display = 'none';
        });
      });

      const form = document.querySelector('form');
      const formId = form.getAttribute('id');

      /* eslint-disable */ 
      getComment(`'${formId}'`);

      form.addEventListener('submit', (e) => {
        /* eslint-disable */ 
        const userName = document.getElementById('user_name').value;
        const user_comment = document.getElementById('user_comment').value;
        postComment(`'${formId}'`, `${userName}`, `'${user_comment}'`);

        const commentData = document.querySelector('.allComments');
        const eachComment = document.createElement('p');
        eachComment.classList.add('eachComment');

        function convertDate(date) {
          const dd = date.getDate().toString();
          const mm = (date.getMonth() + 1).toString();
          const yyyy = date.getFullYear().toString();
          const ddChars = dd.split('');
          const mmChars = mm.split('');
          return `${yyyy}-${mmChars[1] ? mm : `0${mmChars[0]}`}-${ddChars[1] ? dd : `0${ddChars[0]}`}`;
        }
        /* eslint-disable */ 
        const todaysDate = new Date();
        const currentDate = convertDate(todaysDate);
        eachComment.innerText = `${currentDate} - ${userName} : ${user_comment}`;
        commentData.appendChild(eachComment);

        const allComments = document.getElementsByClassName('eachComment');
        const count = allComments.length;
        const countComments = document.getElementsByClassName('count');
        countComments[0].innerText = `(${count})`;

        document.getElementById('user_name').value = '';
        document.getElementById('user_comment').value = '';
        e.preventDefault();
      });
    });

    const postComment = (itemId, username, comment) => {
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/93nCKvfBO85BMX9xGPir/comments', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ item_id: itemId, username, comment }),
      })
        .then((res) => res.ok)
        .then((data) => (data));
    };

    const APIurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
    const appKey = '93nCKvfBO85BMX9xGPir';

    const getComment = (itemId) => {
      fetch(`${APIurl}/${appKey}/comments?item_id=${itemId}`)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i += 1) {
            const commentData = document.querySelector('.allComments');
            const eachComment = document.createElement('p');
            eachComment.classList.add('eachComment');
            eachComment.innerText = `${data[i].creation_date} - ${data[i].username} : ${data[i].comment}`;
            commentData.appendChild(eachComment);
          }
          const allComments = document.getElementsByClassName('eachComment');
          const count = allComments.length;
          const countComments = document.getElementsByClassName('count');
          countComments[0].innerText = `(${count})`;
        });
    };
  });
};
  commentPopups()
})

