const backdrop = document.querySelector('#modal-backdrop');
const modalContentWrapper = document.querySelector(".modal-window__content");
document.addEventListener('click', modalHandler);

function modalHandler(evt) {
    const modalImgOpen = evt.target.closest('.accordion__content_img');
    const modalBtnClose = evt.target.closest('.modal-close');
    
    if (modalImgOpen) {
        const modalSelector = modalImgOpen.dataset.modal;
        const imgSrc = modalImgOpen.getAttribute("src");
        const imageHTML = `
            <img class="modal__img" src="${imgSrc}">
        `
        modalContentWrapper.insertAdjacentHTML('beforeend', imageHTML);
        showModal(document.querySelector(modalSelector));
    }
  
    if (modalBtnClose) {
        evt.preventDefault();
        modalImg = modalContentWrapper.querySelector('.modal__img')
        modalImg.remove()
        hideModal(document.querySelector('.modal-window'));
    }
//   Закрытие при клике на затемненный фон.
// 
//   if (evt.target.matches('#modal-backdrop')) { // backdrop click
//     hideModal(document.querySelector('.modal-window.show'));
//   }
}
  
function showModal(modalElem) {
  modalElem.classList.add('show');
  backdrop.classList.remove('hidden');
}
  
function hideModal(modalElem) {
  modalElem.classList.remove('show');
  backdrop.classList.add('hidden');
}
