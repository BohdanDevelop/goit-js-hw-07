import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function addImages(galleryItems) {
  const imgCollection = galleryItems.reduce((acc, element) => {
    return (acc += `<li><a data-lightbox="images" class="gallery__item" href="${element.preview}"><img class="gallery__image"  src="${element.preview}" alt="${element.description}" src="${element.preview}" title="${element.description}"/> </a></li>`);
  }, ``);
  divRef.insertAdjacentHTML("beforeend", imgCollection);
}
addImages(galleryItems);
const gallery = new SimpleLightbox(".gallery a ");
gallery.options.captionDelay = 250;
