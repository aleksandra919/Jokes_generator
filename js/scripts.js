const url = "https://api.icndb.com/jokes/random";
var paragraph = document.getElementById("joke");

const button = document.getElementById("get-joke");
button.addEventListener("click", function() {
  getJoke();
});
getJoke();

function getJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function() {
    const response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
