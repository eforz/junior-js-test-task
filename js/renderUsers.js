const catalog = document.querySelector(".tabs__catalog");

getUsers();
toggleFavoritesStatus();

async function getUsers() {
  try {
    const responce = await fetch("https://json.medrocket.ru/users/");
    const usersArray = await responce.json();
    renderUsers(usersArray);
  } catch (error) {
    console.log(error);
  }
}

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
