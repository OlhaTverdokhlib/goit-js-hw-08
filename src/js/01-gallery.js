// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const picturesContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPicturesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false;">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li> 
`;
    })
    .join('');
}

const gallerySimple = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
