let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__description');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let add_button = document.querySelector('.profile__add-button');

function formSubmitHandler(evt) {
    evt.preventDefault();
    let name = document.querySelector('.popup__name');
    let job = document.querySelector('.popup__description');
    nameInput.textContent = name.value
    jobInput.textContent = job.value
}

formElement.addEventListener('submit', formSubmitHandler);


function closeModaleWindow() {
    popup.classList.remove('popup_opened');
    console.log(popup)

}

function openModaleWindow() {
    popup.classList.add('popup_opened');
}

add_button.addEventListener('click', openModaleWindow);
closeButton.addEventListener('click', closeModaleWindow);
