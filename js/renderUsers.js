const catalog = document.querySelector(".tabs__catalog");
const usersUrl = "https://json.medrocket.ru/users/"

fetchService(usersUrl, renderUsers)
toggleFavoritesStatus();

function renderUsers(usersArray) {
  usersArray.map((user) => {
    const userHTML = `
            <div class="accordion" data-collapse data-id="${user.id}">
                <button class="accordion__btn">
                    <div class="accordion__header" data-collapse>
                        <div class="accordion__toggle" data-collapse></div>
                        <div class="accordion__title users" data-collapse>
                            ${user.name}
                        </div>
                    </div>
                </button>
                <div class="accordion__content"></div>
            </div>    
        `;
    catalog.insertAdjacentHTML("beforeend", userHTML);
  });
}
