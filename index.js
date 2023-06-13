let selected;
let box = document.querySelector(".val");
let ar = box.querySelectorAll(".circle");
let btn = document.querySelector("button");
let con = document.getElementById("card");
btn.addEventListener("click", show);
function show() {
  if (!selected) {
    alert("Please Select a number");
    return;
  }
  con.innerHTML = `<div class="th">
  <img src="images/illustration-thank-you.svg" alt="" />
</div>
<div class="cont">
  <span>You selected <span id="point"> ${selected.textContent}</span> out of 5</span>
</div>

<h3 class="center w">Thank you!</h3>
<p class="center">
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
</p>`;
}
ar.forEach((e) => {
  e.addEventListener("click", select);
});
function select(e) {
  if (selected) {
    selected.classList.toggle("se");
  }
  selected = e.target;
  selected.classList.toggle("se");
}
