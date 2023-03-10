import { involvementAPI, apiID } from '../config.js';

const postAllLikes = async (par) => {
  try {
    const result = await fetch(`${involvementAPI + apiID}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(par),
    });
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default postAllLikes;