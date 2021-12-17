async function getInput(gif) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RwcmcWQsdLYKrhxc8DwUjYNqy33d7jpW&q=${gif}`;
  const response = await axios.get(url);
  console.log(response);
  const gifData = response.data.data;
  gifData.forEach(gif => {
    showData(gif);
  });
}

getInput("");

const gifList = document.querySelector(".gif-list");

function showData(data) {
  let t = window.matchMedia("(max-width: 850px)")
  if (t.matches) {
    const gifDiv = document.createElement("div");
    const gifImg = document.createElement("img");
    gifImg.src = `${data.images.fixed_height_small.url}`;
    gifDiv.appendChild(gifImg);
    gifList.appendChild(gifDiv);
    gifDiv.classList.add("gif-div");
  } else {
    const gifDiv = document.createElement("div");
    const gifImg = document.createElement("img");
    gifImg.src = `${data.images.fixed_height.url}`;
    gifDiv.appendChild(gifImg);
    gifList.appendChild(gifDiv);
    gifDiv.classList.add("gif-div");
  }
}

const button = document.querySelector("#search");
const input = document.querySelector("input");

button.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let inputValue = input.value;
  input.value = "";
  getInput(inputValue);
  console.log(input.value);
  removeGif();
};

function removeGif() {
  gifList.innerHTML = "";
}

