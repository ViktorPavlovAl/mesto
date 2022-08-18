let formElement = document.querySelector('.popup__input');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__description');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__picture');


function formSubmitHandler(evt) {
    evt.preventDefault();
    let name = formElement.querySelector('.popup__name');
    let job = formElement.querySelector('.popup__description');
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
    let name = formElement.querySelector('.popup__name');
    let job = formElement.querySelector('.popup__description');
    name.value = nameInput.textContent;
    job.value = jobInput.textContent;
}

editButton.addEventListener('click', openModaleWindow);
closeButton.addEventListener('click', closeModaleWindow);
