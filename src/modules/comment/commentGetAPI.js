import { InvolvementAPI, InvolvementID } from './InvolvementAPI.js';

const getComment = async (id) => {
  try {
    const res = await fetch(`${InvolvementAPI + InvolvementID}/comments?item_id=${id}`);
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default getComment;