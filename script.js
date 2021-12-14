async function getInput(gif) {
  // try {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=RwcmcWQsdLYKrhxc8DwUjYNqy33d7jpW&q=${gif}`;//&limit=25
  const response = await axios.get(url);
  console.log(response);
  const gifData = response.data.data;
  gifData.forEach(gif => {
    showData(gif);
  });
  // } catch (error) {
  //   showErrorMessage();
  // }
}

// function showErrorMessage() {
//   const errorImg = document.createElement("img");
//   errorImg.src = "https://media2.giphy.com/media/Ke8JKfxe83FpLrra71/giphy.gif?cid=790b7611ccb80e4d2d4b216aa10d6c1c39ff0b7c6f246fd0&rid=giphy.gif&ct=g";
//   errorImg.alt = "404 error";
//   gifList.appendChild(errorImg);
// }

getInput("amnbvcxzsdfghjiuytresd");

const gifList = document.querySelector(".gif-list");

function showData(data) {

  const gifImg = document.createElement("img");
  gifImg.src = `${data.images.fixed_height.url}`;
  gifList.appendChild(gifImg);

  // gifImg.onload = () => {//download images
  //   const canvas = document.createElement("canvas");
  //   const ctx = canvas.getContext("2d");
  //   let dataURL;
  //   canvas.height = gifImg.naturalHeight;
  //   canvas.width = gifImg.naturalWidth;
  //   ctx.drawImage(gifImg, 0, 0);
  //   dataURL = canvas.toDataURL('image/jpeg', 1.0);
  //   callback(dataURL);
  // }

}

// const dbtn = document.createElement("button");
// dbtn.classList.add = (".download");
// const download = document.querySelector(".download");

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

