let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__description');
let editButton = document.querySelector('.profile__picture');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let nameUser = formElement.querySelector('.popup__name');
let jobUser = formElement.querySelector('.popup__description');

function closeModaleWindow() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameUser.value;
    jobInput.textContent = jobUser.value;
    closeModaleWindow();
}

function openModaleWindow() {
    popup.classList.add('popup_opened');
    nameUser.value = nameInput.textContent;
    jobUser.value = jobInput.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openModaleWindow);
closeButton.addEventListener('click', closeModaleWindow);