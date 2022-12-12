window.addEventListener("click", (event) => {
  const accordion = event.target.closest(".accordion");

  if (event.target.hasAttribute("inner")) {
    const albumId = accordion.getAttribute("albumId");
    const accordionContent = accordion.querySelector(".accordion__content");

    if (!accordion.querySelector(`[data-imageId]`)) {
      const photosUrl = `https://json.medrocket.ru/photos?albumId=${albumId}`;
      fetchService(photosUrl, renderPhotos);
    };
  
    function renderPhotos(photosArray) {
      photosArray.map((photo) => {
        const photoHTML = `
          <div class="accordion__content_img-wrapper" data-title="${photo.title}" data-imageId="${photo.id}">
            <img class="accordion__content_img" src="${photo.url}" alt="${photo.title}" data-title="${photo.title}" data-imageId="${photo.id}" data-modal="#modal_1">
            <div class="img__stars">
              <img class="star active unfavorite" src="./assets/star_empty.png" data-star data-unfavorite>
              <img class="star favorite" src="./assets/star_active.png" data-star data-favorite>
            </div>
          </div>
        `;
        accordionContent.insertAdjacentHTML("beforeend", photoHTML);
      });
    }
  }
})