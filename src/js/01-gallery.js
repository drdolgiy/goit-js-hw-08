// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";

const galleryContainer = document.querySelector('.gallery');
galleryContainer.style.listStyle = "none";

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup() {  
    return galleryItems.map(({ preview, original, description }) => {
        return `<li>       
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li> `}).join(''); 
}

const lightbox = new SimpleLightbox(`.gallery a`, {captionsData:'alt', captionDelay:250});

console.log(galleryItems);





