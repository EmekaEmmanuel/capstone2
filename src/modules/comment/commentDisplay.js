import getComment from './commentGetAPI.js';

const displayComment = async (id) => {
  const res = await getComment(id);
  const commentlist = document.querySelector('.commentlist');
  commentlist.innerHTML = '';
  if (res.length !== undefined) {
    res.forEach((comment) => {
      commentlist.innerHTML += `<li>
     ${comment.creation_date} - ${comment.username} - ${comment.comment}
   </li>`;
    });
  }
};

export default displayComment;