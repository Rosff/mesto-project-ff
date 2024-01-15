export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated");
  // при первом открытии попапа он резко выпадает, но нам в чате написали что таймаут лучше не использовать, если направите на путь истинный, как лучше сделать,буду благодарен
  //  setTimeout(function() {
  //   popup.style.opacity = '1';
  // });
  popup.addEventListener("click", handlePopupClose);
  document.addEventListener("keydown", handleEscape);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", handlePopupClose);
  document.removeEventListener("keydown", handleEscape);
}

function handlePopupClose(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")
  ) {
    closePopup(evt.currentTarget);
  }
}

function handleEscape(evt) {
  console.log(evt.key);
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup);
  }
}
