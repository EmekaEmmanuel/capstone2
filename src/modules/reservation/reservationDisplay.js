import getReservation from './reservationGetAPI.js';

const displayReservation = async (id) => {
  const res = await getReservation(id);
  const reservedate = document.querySelector('.reservedate');
  reservedate.innerHTML = '';
  if (res.length !== undefined) {
    res.forEach((reserve) => {
      reservedate.innerHTML += `<li>
     ${reserve.date_start} - ${reserve.date_end} - ${reserve.username}
   </li>`;
    });
  }
};

export default displayReservation;