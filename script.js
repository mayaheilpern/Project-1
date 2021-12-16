async function getInput(gif) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RwcmcWQsdLYKrhxc8DwUjYNqy33d7jpW&q=${gif}`;//&limit=25
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
    const gifImg2 = document.createElement("img");
    gifImg2.src = `${data.images.fixed_height_small.url}`;
    gifList.appendChild(gifImg2);
  } else {
    const gifImg = document.createElement("img");
    gifImg.src = `${data.images.fixed_height.url}`;
    gifList.appendChild(gifImg);
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



// favorite.addEventListener("click", function () { 
//   window.localStorage
// });



// $(img).hover(function () {
//   let favoriteButton = document.createElement("button");
//   favoriteButton.classList.add("fav-btn");
// });

// let image = document.querySelector("img");
// let favorite = document.createElement("button");
// favorite.classList.add("fav-btn");
// image.appendChild(favorite);