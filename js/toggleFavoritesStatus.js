function toggleFavoritesStatus () {
    const favorites = document.querySelector('.favorites__img-wrapper')
    const emptyFaforites = document.querySelector('[data-empty]')
    if (favorites.children.length > 0) {
        console.log("full")
        emptyFaforites.classList.add("none")
    } else {
        emptyFaforites.classList.remove("none")
    }
}
