import getComment from './commentGetAPI.js';
import getAllShows from '../../api/getAllShows.js';
import { getAllShowsURL } from '../../config.js';

const displayComment = async (id) => {
  let { data } = (await getAllShows(getAllShowsURL))[0] 
  const commentData = await getComment(id);
  console.log(parseFloat(id))
  data.forEach((x) => {
    if (parseFloat(id) === x.id) {
      x.commentsArr = commentData;
      let { commentsArr } = x
      console.log(commentsArr)
      let commentlist = document.querySelector('.commentlist');
      commentsArr.forEach((comment) => {
        commentlist.innerHTML += `<li>
             ${comment.creation_date} - ${comment.username} - ${comment.comment}
           </li>`;
      });
      console.log(commentlist)
      console.log(commentsArr.length)
    }
  }); 
};

export default displayComment;