import { InvolvementAPI, InvolvementID } from './InvolvementAPI.js';

const getReservation = async (id) => {
  try {
    const res = await fetch(`${InvolvementAPI + InvolvementID}/reservations?item_id=${id}`);
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default getReservation;