import getComment from './commentGetAPI.js';

const commentCounter = async (id, commentCount) => {
  const data = await getComment(id);
  // count comment
  commentCount.innerHTML = '';
  if (data.length === undefined) {
    commentCount.innerHTML += 'Comments';
  } else {
    commentCount.innerHTML += `Comments(${data.length})`;
  }
};
export default commentCounter;