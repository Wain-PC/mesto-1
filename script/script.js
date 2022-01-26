const popupContainer = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.form');
const edit = document.querySelector('.profile__edit-button');
const popupExit = document.querySelector('.popup__container-exit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = formElement.querySelector('.form__input_profile_name');
const subnameInput = formElement.querySelector('.form__input_profile_subname');
const profile = document.querySelector('.profile');

const templateEl = document.querySelector('.fotos');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: "Архыз",
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: "Челябинская область",
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: "Иваново",
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: "Камчатка",
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: "Холмогорский район",
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: "Байкал",
    }
];

function render() {
    const html = initialCards
        .map((item) => {
            return getItem(item);
        });
    templateEl.append(...html);
}

function getItem(item) {
    const newCard = templateEl.content.cloneNode(true);
    const cardTitle = newCard.querySelector('.foto__title');
    cardTitle.textContent = item.name;
    const cardImage = newCard.querySelector(".foto__image").src = item.link;
    return newCard;
}

render();

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