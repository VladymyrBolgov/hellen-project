
const readMoreBtn = document.querySelector(".review__btn");
const text = document.querySelector(".review__comment");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Hide") {
    readMoreBtn.innerText = "Read More";
  } else {
    readMoreBtn.innerText = "Hide";
  }
});
