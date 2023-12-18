// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function newCard(item, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    const delCard = evt.target.closest('.places__item');
    delCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
    const newdCard = newCard(item, deleteCard);
    renderCard(newdCard);
})

//Функция добавления карточки в разметку
function renderCard(card) {
    cardContainer.prepend(card);
}