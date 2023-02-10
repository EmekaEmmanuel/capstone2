import { involvementAPI, involvementID } from '../../config.js';

const getReservation = async (id) => {
  try {
    const res = await fetch(`${involvementAPI + involvementID}/reservations?item_id=${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return false;
  } catch (error) {
    return false;
  }
};
export default getReservation;