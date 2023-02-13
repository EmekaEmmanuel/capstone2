import getReservation from './reservationGetAPI.js';
import getAllShows from './getAllShows.js';
import { getAllShowsURL } from '../config.js';

const displayReservation = async (id) => {
  const { data } = (await getAllShows(getAllShowsURL))[0];
  const reservationData = await getReservation(id);
  let objectArr = {};
  data.forEach((x) => {
    if (parseFloat(id) === x.id && reservationData !== false) {
      x.involvementsArr = reservationData;
      objectArr = x;
    }
    if (parseFloat(id) === x.id && reservationData === false) {
      objectArr = x;
    }
  });
  return objectArr;
};

export default displayReservation;