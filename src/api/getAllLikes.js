import { involvementAPI, apiID } from '../config.js';

const getAllLikes = async () => {
  try {
    const result = await (await fetch(`${involvementAPI}${apiID}/likes`)).json();
    return result;
  } catch (error) {
    return error;
  }
};

export default getAllLikes;