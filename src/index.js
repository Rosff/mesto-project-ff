import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeOnCard } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";

const cardList = document.querySelector(".places__list");

// Вывести карточки на страницу
function renderInitialCards(deleteCard, listWhereFrom, listWhere) {
  listWhereFrom.forEach(function (item) {
    listWhere.prepend(createCard(deleteCard, item, likeOnCard, openImage));
  });
}

renderInitialCards(deleteCard, initialCards, cardList);
//ПРОФИЛЬ
//кнопка редактирования профиля, открытие окна 
const buttonOpenProfile = document.querySelector(".profile__edit-button");
buttonOpenProfile.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileEdit);
  
});
//Новый профиль,новая жизнь
const formProfileEdit = document.forms["edit-profile"];
const jobInput = formProfileEdit.querySelector(".popup__input_type_description");
const nameInput = formProfileEdit.querySelector(".popup__input_type_name");
const profileDescription = document.querySelector(".profile__description");
const profileTitle = document.querySelector(".profile__title");
const popupProfileEdit = document.querySelector(".popup_type_edit");

//Создание новой карточки
//кнопка создания новой карточки
const buttonCardNew = document.querySelector(".profile__add-button");
const popupCardNew = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
buttonCardNew.addEventListener("click", function(){
  openPopup(popupCardNew);
});

function submitNewForm(evt) {
  evt.preventDefault(); 
  const valueName = nameInput.value;
  const valueJob = jobInput.value;
  profileDescription.textContent = valueJob;
  profileTitle.textContent = valueName;
  closePopup(popupProfileEdit)
}

formProfileEdit.addEventListener("submit", submitNewForm);

//форма для новой кaрточки
const formCard = document.forms["new-place"];
const linkCard = formCard.querySelector(".popup__input_type_url");
const nameCard = formCard.querySelector(".popup__input_type_card-name");

function renderCard (deleteCard, listFrom, listWhere ){
  listWhere.prepend(createCard(deleteCard, listFrom, likeOnCard, openImage));
}

function submitAddForm(evt) {
  const newCard = 
    {name: nameCard.value,
    link: linkCard.value,
    };

  renderCard (deleteCard, newCard, cardList )
  closePopup(popupCardNew);
  formCard.reset();
}

//добавление карточки
formCard.addEventListener("submit", submitAddForm);

//картинка открылась
const image = popupImage.querySelector(".popup__image");
const caption = popupImage.querySelector(".popup__caption");

export function openImage(evt) {

  image.src = evt.target.src;
  caption.textContent = evt.target.alt;
  image.alt = evt.target.alt;
  openPopup(popupImage);
}



// мои эксперементы
// function addRandomImage() {
//   var imageUrls = [
//     'https://www.google.com/search?q=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sca_esv=598140917&tbm=isch&sxsrf=ACQVn0_-0iHSNvO_XlyYV7F0c4FEtO-6cg:1705150700222&source=lnms&sa=X&ved=2ahUKEwjTwJmutdqDAxVDExAIHSJYCK0Q_AUoAXoECAIQAw&biw=1920&bih=919&dpr=1',
//   ];

//   var randomIndex = Math.floor(Math.random() * imageUrls.length);
//   var img = document.createElement('img');
//   img.src = imageUrls[randomIndex];
//   document.body.appendChild(img);
// }


// function addRandomImage() {
//   var img = document.createElement('img');
//   var randomImageUrl = 'https://source.unsplash.com/random'; 
//   img.src = randomImageUrl;
//   document.body.appendChild(img);
// }

