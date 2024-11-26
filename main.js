const card = document.querySelector(".card");
const cardText = document.querySelector(".text");
const error = document.getElementById("error");
const loading = document.getElementById("loading");

card.addEventListener("click", () => {
  loading.innerText = "Loading...";
  fetch("https://api.adviceslip.com/advice") // This URL is intentionally incorrect
    .then((res) => res.json())
    .then((advice) => {
      cardText.innerHTML = `"${advice.slip.advice}"`;
      loading.innerText = "";
    })
    .catch((err) => {
      error.innerText = "Failed to fetch advice. Please try again.";
    });
});
