import { InvolvementAPI, InvolvementID } from './InvolvementAPI.js';

const sendComment = async (userComment) => {
  try {
    const res = await fetch(`${InvolvementAPI + InvolvementID}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(userComment),
    });

    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default sendComment;