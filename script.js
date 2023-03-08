const card = document.querySelector(".card");
const img = document.querySelector("img");
const para = document.querySelector(".description");

card.addEventListener("mouseover", activeState, false);
card.addEventListener("touchstart", activeState, false);

card.addEventListener("mouseleave", inactiveState, false);
card.addEventListener("touchend", inactiveState, false);

function activeState() {
  card.style.maxWidth = "min(30rem, 90%)";
  para.style.display = "block";
  console.log(img.id);
  //   img.setAttribute("src", "./images/expansion-img.jpg");
  img.style.padding = "0";
  img.style.borderRadius = "10px 10px 0 0";
}

function inactiveState() {
  card.style.maxWidth = "15rem";
  para.style.display = "none";
  //   img.setAttribute("src", "./images/thumbnail-img.jpg");
  img.style.padding = "1em";
  img.style.borderRadius = "24px";
}
