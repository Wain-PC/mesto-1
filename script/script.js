const popupContainer = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.form');
const edit = document.querySelector('.profile__edit-button');
const popupExit = document.querySelector('.popup__container-exit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = formElement.querySelector('.form__input__name_profile');
const subnameInput = formElement.querySelector('.form__input__subname_profile');
const profile = document.querySelector('.profile');

function open() {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    subnameInput.value = profileSubtitle.textContent;
}

function close() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = subnameInput.value;
    close();
}

document.querySelector('.form')
edit.addEventListener('click', open);
popupExit.addEventListener('click', close);
formElement.addEventListener('submit', formSubmitHandler);