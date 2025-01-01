const button = document.getElementById("subscribe");
const thanksForSub = document.getElementById("thanks-for-sub");
const email = document.getElementById("email");

let isClicked = false;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value) {
    container = document.createElement("div");
    container.innerHTML = ` 
              <img src="./assets/images/icon-list.svg" alt="" />
              <h1>Thanks for subscribing!</h1>
              <p>
                A confirmation email has been sent to
                <span>${email.value}.</span> Please open it and click the
                button inside to confirm your subscription.
              </p>
              <button type="button" id="dismiss" onclick="handleDismiss()" >Dismiss message</button>
            </div>`;
    thanksForSub.appendChild(container);
    thanksForSub.classList.add("show");
    console.log(email.value);
  }
});

const dismiss = document.getElementById("dismiss");

function handleDismiss() {
  container.innerHTML = "";
  thanksForSub.innerHTML = "";
  thanksForSub.classList.remove("show");
  isClicked = false;
  email.value = "";
  console.log("dismiss");
}
