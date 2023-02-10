import { InvolvementAPI, InvolvementID } from './InvolvementAPI.js';

const getComment = async (id) => {
  try {
<<<<<<< HEAD:src/modules/reservation/reservationGetAPI.js
    const res = await fetch(`${InvolvementAPI + InvolvementID}/reservations?item_id=${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
=======
    const res = await fetch(`${InvolvementAPI + InvolvementID}/comments?item_id=${id}`);
    if (!res.ok) {
      return false;
>>>>>>> comment_feature:src/modules/comment/commentGetAPI.js
    }
    return false;
  } catch (error) {
    return false;
  }
};
export default getComment;