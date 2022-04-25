import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
        }).
        join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    docClose: false
});

lightbox.on('show.simplelightbox', (e) => e.preventDefault());