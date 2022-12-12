window.addEventListener("click", (event) => {
    const accordion = event.target.closest('.accordion')

    if (event.target.hasAttribute('data-collapse')) {
        accordion.querySelector(".accordion__content").classList.toggle("active")
        accordion.querySelector('.accordion__toggle').classList.toggle('active')
        const id = accordion.getAttribute("data-id")
        const albumId = accordion.getAttribute("albumId")
        const content = accordion.querySelector(".accordion__content")
        
        async function getAlbums() {
            try {
                const responce = await fetch(`https://json.medrocket.ru/albums?userId=${id}`)
                const albumsArray = await responce.json()
                renderAlbums(albumsArray)
            
            } catch (error) {
                console.log(error)
            }
        }

        if (!accordion.querySelector(`[albumId]`)) {
            getAlbums()
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
                content.insertAdjacentHTML('beforeend', albumHTML)    
            })
        }

        if (event.target.hasAttribute('inner')) {
            async function getPhotos() {
                try {
                    const responce = await fetch(`https://json.medrocket.ru/photos?albumId=${albumId}`)
                    const photosArray = await responce.json()
                    renderPhotos(photosArray)
                
                } catch (error) {
                    console.log(error)
                }
            }

            if (!accordion.querySelector(`[data-img-id]`)) {
                getPhotos()
            }
            
            function renderPhotos (photosArray) {
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

                    content.insertAdjacentHTML('beforeend', photoHTML)
                })
            }
        }

    }
})