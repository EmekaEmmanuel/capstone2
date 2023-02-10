import { involvementAPI, involvementID } from '../../config.js';

const getComment = async (id) => {
  try {
    const res = await fetch(`${involvementAPI + involvementID}/comments?item_id=${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return false;
  } catch (error) {
    return false;
  }
};
export default getComment;