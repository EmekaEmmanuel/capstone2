const commentUI = () => ` <section class="comment" id="comment">
<section class="commentimageholder">
  <div class="commentimage">
    <img
      id="commentpicture"
      alt="moviename"
    />
  </div>
  <button id="commentclose">X</button>
</section>
<section class="commentnameholder">
  <h2 id="commentname"></h2>
  <ul class="commentnamedetail">
    <li id="commenttype"> </li>
    <li id="commentlanguage"> </li>
    <li id="commentstatus"> </li>
    <li id='commentaverageRuntime'> </li>
  </ul>
</section>
<section class="commentholder">
  <h2 id="commentcount"></h2>
  <ul class="commentlist"></ul>
</section>
<section class="addcomment">
  <h2>Add a comment</h2>
  <input id="usernamecomment" type="text" placeholder="Your Name" />

  <textarea id="usercomment" required  placeholder=" Kindly add a comment..." ></textarea>
  <button class="commentbutton" id="commentbutton">Comment</button>
</section>
</section>`;
export default commentUI;