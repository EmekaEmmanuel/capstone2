import closePopupIcon from '../../images/closepopup.png';

const reservationPopupUI = async (selectedMovie) => `
<section class="popup_container">
        <header class="popup_header">
        <figure class="movie_banner">
            <img src=${selectedMovie.image.original} alt="">
        </figure>
        <figure class="close_figure">
            <img class="close_popup" src= ${closePopupIcon} alt="">
        </figure>
        </header>

        <main class="popup_main">
            <h2>${selectedMovie.name}</h2>
            <article class="popup_article">
                <div class="desc1">
                    <p>Type:${selectedMovie.type}</p>
                    <p>Language: ${selectedMovie.language}</p>
                </div>
                <div class="desc2">
                    <p>Status: ${selectedMovie.status}</p>
                    <p>Average Runtime: ${selectedMovie.averageRuntime}</p>
                </div>
            </article>

            <div class="comment_box">
                <h3  class="comment_h">Reservations (${selectedMovie.involvementsArr ? selectedMovie.involvementsArr.length : 0})</h3>
                <ul class="comment_holder"> ${selectedMovie.involvementsArr ? selectedMovie.involvementsArr.map((e) => `
                <li>
                         ${e.username} - ${e.date_start} - ${e.date_end}
                </li> `).join('') : ''}
                </ul>
            </div>
        </main>

        <form action="" class="popup_form">
            <h3>Add a comment</h3>
            <fieldset class="form_data">
                <input class="nameInput" type="text" placeholder="Your name" >
                <input class="startdateInput" type="date" placeholder="Start date" >
                <input class="enddateInput" type="date" placeholder="End date" >  
            </fieldset>
            <fieldset class="form_action">
                <button class="submit_btn">Reserve</button>
            </fieldset>

        </form>

    </section>
`;
export default reservationPopupUI;
