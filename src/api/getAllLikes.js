import { involvementAPI, apiID } from '../config.js';

const getAllLikes = async () => {
  try {
    const result = await (await fetch(`${involvementAPI}${apiID}/likes`));
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`);
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};

export default getAllLikes;