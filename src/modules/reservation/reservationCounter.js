import getReservation from './reservationGetAPI.js';

const reservationCounter = async (id, reservationCount) => {
  const data = await getReservation(id);
  // count reservation
  reservationCount.innerHTML = '';
  if (data.length === undefined) {
    reservationCount.innerHTML += 'Reservations';
  } else {
    reservationCount.innerHTML += `Reservations(${data.length})`;
  }
};
export default reservationCounter;