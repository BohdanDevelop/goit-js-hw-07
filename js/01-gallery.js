import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const divRef = document.querySelector(".gallery");
function addImages(galleryItems) {
  const imgCollection = galleryItems.reduce((acc, element) => {
    return (acc += `<div class="gallery__item"><a class="gallery__link" href=""><img class="gallery__image" data-source="${element.original}" src="${element.preview}" alt="${element.description}"/> </a></div>`);
  }, ``);
  divRef.insertAdjacentHTML("beforeend", imgCollection);
}

addImages(galleryItems);

divRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const targetImage = event.target;
  const biggerImg = galleryItems.find(
    (element) => element.preview === targetImage.getAttribute("src")
  );
  const instance = basicLightbox.create(
    `<img src=${biggerImg.original} alt=${biggerImg.description} />`,
    { closable: true }
  );
  instance.show();
  window.addEventListener("keydown", onEscPress);
  function onEscPress(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }
}
