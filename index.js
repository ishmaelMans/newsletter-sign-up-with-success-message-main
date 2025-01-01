let isClicked = false;
const button = document.getElementById("subscribe");
const thanksForSub = document.getElementById("thanks-for-sub");
const email = document.getElementById("email");
const dismiss = document.getElementById("dismiss");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isClicked) {
    thanksForSub.classList.add("show");
    console.log(email.value);
  }
});

dismiss.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isClicked) {
    thanksForSub.classList.remove("show");
  }
});
