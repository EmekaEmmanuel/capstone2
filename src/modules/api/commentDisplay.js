import getComment from './commentGetAPI.js';
import getAllShows from './getAllShows.js';
import { getAllShowsURL } from '../config.js';

const displayComment = async (id) => {
  const { data } = (await getAllShows(getAllShowsURL))[0];
  const commentData = await getComment(id);
  let objectArr = {};
  data.forEach((x) => {
    if (parseFloat(id) === x.id && commentData !== false) {
      x.involvementsArr = commentData;
      objectArr = x;
    }
    if (parseFloat(id) === x.id && commentData === false) {
      objectArr = x;
    }
  });
  return objectArr;
};

export default displayComment;