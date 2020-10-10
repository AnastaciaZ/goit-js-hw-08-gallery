import pictures from './gallery-items.js';
console.log(pictures);

const galleryUl = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryCardsMarkup(pictures);
galleryUl.insertAdjacentHTML('beforeend', cardsMarkup);
galleryUl.addEventListener('click', onGaleryUlClick)

console.log(createGalleryCardsMarkup(pictures))
const openModal = document.querySelector('.js-lightbox');
const imgClick = document.querySelector('.lightbox__image');
const closeModal = document.querySelector('.lightbox__button');
closeModal.addEventListener('click', onCloseModal)


function createGalleryCardsMarkup(pictures) {
    return pictures.map(({preview, original, description})=> {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');

  
}
function onGaleryUlClick(event) { 
    event.preventDefault();
      if (event.target.nodeName !=='IMG'){
      return;
    }
     console.log(event.target.dataset.source);
    onOpenModal()
    return event.target.dataset.source;
   
}

function onOpenModal() { 
    openModal.classList.add('is-open');
    imgOpenModal();
}

function imgOpenModal() { 
    imgClick.src = event.target.dataset.source;
    imgClick.alt = event.target.alt;
      
}
function onCloseModal(event) {
    if (event.target.nodeName === 'BUTTON') {
        openModal.classList.remove('is-open');
        imgClick.src = '';
        imgClick.alt = '';
    }
}
     
   

//{once: true} 