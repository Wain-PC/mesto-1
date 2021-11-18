/*form_open*/
let formElement = document.querySelector('.form');
let pop_up = document.querySelector('.popup');
let edit = document.querySelector('.profile__edit-button');
let close = document.querySelector('.popup__exit');
let profileName = document.querySelector('.profile__title');
let profileSubName = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_profile_name');
let jobInput = document.querySelector('.popup__input_profile_subname');


//открытие попапа
function clicked() {

    profileName.textContent = nameInput.value;
    profileSubName.textContent = jobInput.value;
    formContainer.classList.add('form_display');
    pop_up.classList.add('pop-up_display_flex');

}
//закрытие попапа
function exit() {

    formContainer.classList.remove('form_display');
    pop_up.classList.remove('pop-up_display_flex');

}
//сохранение формы
function formSubmitHandler (evt) {

    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubName.textContent = jobInput.value;

}

edit.addEventListener('click', clicked);
close.addEventListener('click', exit);
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', exit);