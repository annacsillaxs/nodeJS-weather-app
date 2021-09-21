console.log("Client side js file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message_1 = document.querySelector("#message--1");
const message_2 = document.querySelector("#message--2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  message_1.textContent = "Loading...";
  message_2.textContent = "";

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        message_1.textContent = data.error;
        console.log(data.error);
      } else {
        message_1.textContent = data.location;
        message_2.textContent = data.forecast;
        search.value = "";
        console.log(data.forecast);
        console.log(data.location);
      }
    });
  });
});
