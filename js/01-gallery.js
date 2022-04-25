import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', openImgHandler);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`
    }).join('');
};

function openImgHandler(e) {
    const isImageLink = e.target.classList.contains('gallery__image');
    if (!isImageLink) {
        return;
    };

    e.preventDefault();

    const keyboardCloseImgHandler = e => {
        if (e.code === 'Escape') {
            lightbox.close();
        }
    };

    const lightbox = basicLightbox.create(
        `<img src="${e.target.dataset.source}" alt="${e.target.alt}" />`,
        {
            onShow: (lightbox) =>
                window.addEventListener("keydown", keyboardCloseImgHandler),
            onClose: (lightbox) =>
                window.removeEventListener("keydown", keyboardCloseImgHandler),
        }
    );
    lightbox.show();
};

// console.log(galleryItems);