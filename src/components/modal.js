export function openPopup(popup){
    popup.classList.add('popup_is-opened');
    popup.addEventListener('click',closeOverlay)
    document.addEventListener('keydown',closeEsc)
  }
  
  export function closePopup(popup){
    popup.classList.remove('popup_is-opened');
    popup.removeEventListener('click',closeOverlay);
    document.removeEventListener('keydown',closeEsc);
  }
  
  function closeOverlay(evt){
    
    if (evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")){
     closePopup(evt.currentTarget)
    } 
  
  }
  
  function closeEsc(evt){
    console.log(evt.key)
    if(evt.key === 'Escape'){
        const popup = document.querySelector('.popup_is-opened');
         closePopup(popup);
    }
  }