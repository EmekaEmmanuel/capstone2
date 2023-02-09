const reservationUI = () => ` <section class="reservation" id="reservation">
<section class="reserveimageholder">
  <div class="reserveimage">
    <img
      id="reservepicture"
      alt="moviename"
    />
  </div>
  <button id="reservationclose">X</button>
</section>
<section class="reservenameholder">
  <h2 id="reservename"></h2>
  <ul class="reservenamedetail">
    <li id="reservetype"> </li>
    <li id="reservelanguage"> </li>
    <li id="reservestatus"> </li>
    <li id='reserveaverageRuntime'> </li>
  </ul>
</section>
<section class="reservedateholder">
  <h2 id="reservationcount"></h2>
  <ul class="reservedate"></ul>
</section>
<section class="addreservation">
  <h2>Add a reservation</h2>
  <input id="username" type="text" placeholder="Your Name" />
  <input
    id="startdate"
    type="text"
    placeholder="start Date"
    onfocus="(this.type='date')"
  />
  <input
    id="enddate"
    type="text"
    placeholder="End Date"
    onfocus="(this.type='date')"
  />
  <button class="reservebutton" id="reservebutton">Reserve</button>
</section>
</section>`;
export default reservationUI;