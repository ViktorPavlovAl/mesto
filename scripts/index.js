let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__description');
let editButton = document.querySelector('.profile__picture');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let nameUser = formElement.querySelector('.popup__field_type_name');
let jobUser = formElement.querySelector('.popup__field_type_description');

function closeModalWindow() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameUser.value;
    jobInput.textContent = jobUser.value;
    closeModalWindow();
}

function openModalWindow() {
    popup.classList.add('popup_opened');
    nameUser.value = nameInput.textContent;
    jobUser.value = jobInput.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openModalWindow);
closeButton.addEventListener('click', closeModalWindow);