const imageWrapper = document.querySelector(".favorites__img-wrapper");

window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-unfavorite")) {
    const image = event.target.closest(".accordion__content_img-wrapper");
    const catalogStarFavorite = image.querySelector("[data-favorite]");
    const catalogStarUnfavorite = image.querySelector("[data-unfavorite]");
    const imageInfo = {
      id: image.querySelector(".accordion__content_img").getAttribute("data-imageId"),
      imgSrc: image.querySelector(".accordion__content_img").getAttribute("src"),
      title: image.querySelector(".accordion__content_img").getAttribute("data-title"),
    };
    const imageInFavorites = imageWrapper.querySelector(`[data-imageId="${imageInfo.id}"]`);
    
    catalogStarUnfavorite.classList.remove("active");
    catalogStarFavorite.classList.add("active");

    if (!imageInFavorites) {
      const photoHTML = `
                        <div class="accordion__content_img-wrapper notooltip">
                            <img class="accordion__content_img" src="${imageInfo.imgSrc}" alt="${imageInfo.title}" data-imageId="${imageInfo.id}" data-modal="#modal_1">
                            <div class="img__stars">
                                <img class="star" src="./assets/star_empty.png" data-card data-unfavorite data-from-favorite>
                                <img class="star active" src="./assets/star_active.png" data-card data-favorite data-from-favorite>
                            </div>
                            <div class="img_description">
                                <p>${imageInfo.title}</p>
                            </div>
                        </div>
                    `;
      imageWrapper.insertAdjacentHTML("beforeend", photoHTML);
    }
    toggleFavoritesStatus();
  }

  if (event.target.hasAttribute("data-favorite")) {
    const image = event.target.closest(".accordion__content_img-wrapper");
    const favoritesStarFavorite = image.querySelector("[data-favorite]");
    const favoritesStarUnfavorite = image.querySelector("[data-unfavorite]");
    const imageId = image.querySelector(".accordion__content_img").getAttribute("data-imageId");
    const imageInFavorites = imageWrapper.querySelector(`[data-imageId="${imageId}"]`);

    favoritesStarFavorite.classList.remove("active");
    favoritesStarUnfavorite.classList.add("active");

    if (imageInFavorites) {
      const ImgParent = imageInFavorites.closest(
        ".accordion__content_img-wrapper"
      );
      ImgParent.remove();
      toggleFavoritesStatus();
    }
  }

  if (event.target.hasAttribute("data-from-favorite")) {
    const image = event.target.closest(".accordion__content_img-wrapper");
    const imageInfo = {id: image.querySelector(".accordion__content_img").getAttribute("data-imageId")};
    const catalog = document.querySelector(".tabs__catalog");
    const catalogImageWrapper = catalog.querySelector(
      `[data-imageId="${imageInfo.id}"]`
    );
    const catalogStarFavorite = catalogImageWrapper.querySelector("[data-favorite]");
    const catalogStarUnavorite = catalogImageWrapper.querySelector("[data-unfavorite]");

    catalogStarFavorite.classList.remove("active");
    catalogStarUnavorite.classList.add("active");
  }
});
