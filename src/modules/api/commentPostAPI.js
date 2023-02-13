import { involvementAPI, involvementID } from '../config.js';

const sendComment = async (userComment) => {
  try {
    const res = await fetch(`${involvementAPI + involvementID}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(userComment),

    });

    if (!res.ok) throw new Error(`Error fetching item data: ${res.status}`);
    const data = await res;
    return data;
  } catch (error) {
    return error;
  }
};
export default sendComment;