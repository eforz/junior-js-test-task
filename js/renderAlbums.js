window.addEventListener("click", (event) => {
  const accordion = event.target.closest(".accordion");

  if (event.target.hasAttribute("data-collapse")) {
    accordion.querySelector(".accordion__content").classList.toggle("active");
    accordion.querySelector(".accordion__toggle").classList.toggle("active");
    const albumsId = accordion.getAttribute("data-id");
    const accordionContent = accordion.querySelector(".accordion__content");

    if (!accordion.querySelector(`[albumId]`)) {
      const albumsUrl = `https://json.medrocket.ru/albums?userId=${albumsId}`;
      fetchService(albumsUrl, renderAlbums);
    }

    function renderAlbums(albumsArray) {
      albumsArray.map((album) => {
        const albumHTML = `
          <div class="accordion" data-collapse inner albumId="${album.id}">
            <button class="accordion__btn" data-collapse inner>
                <div class="accordion__header" data-collapse inner>
                    <div class="accordion__toggle " data-collapse inner></div>
                    <div class="accordion__title " data-collapse inner>
                      ${album.title}
                    </div>
                </div>
            </button>
            <div class="accordion__content inner"></div>
          </div>
        `;
        accordionContent.insertAdjacentHTML("beforeend", albumHTML);
      });
    }
  }
});
