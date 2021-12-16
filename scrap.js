



$(img).hover(function () {
  let favoriteButton = document.createElement("button");
  favoriteButton.classList.add("fav-btn");
});

let image = document.querySelector("img");
let favorite = document.createElement("button");
favorite.classList.add("fav-btn");
image.appendChild(favorite);