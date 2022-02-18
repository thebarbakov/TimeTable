const popup = document.querySelector('.popup')
const popupTitle = popup.querySelector('#popup-title')
const popupTime = popup.querySelector('#popup-time')
const popupType = popup.querySelector('#popup-type')
const popupRoom = popup.querySelector('#popup-room')
const popupTeacher = popup.querySelector('#popup-teacher')
const popupMessage = popup.querySelector('#popup-message')
const popupButtonClose = popup.querySelector('.popup__close')
const popupOverlay = popup.querySelector('.popup__overlay')
const popupUrl = popup.querySelector('.popup__url')

function unhide(object, x, value) {
    x.textContent = value
    popup.querySelector(object).classList.remove('popup__hided')
}

function openPopup(title, type, room, teacher, num, messageType){
    let url;
    popupTitle.textContent = title
    num == '' ? popup.querySelector('.popup__time').classList.add('popup__hided') : unhide('.popup__time', popupTime, timeTable[num-1].timePeriod)
    type == '' ? popup.querySelector('.popup__type').classList.add('popup__hided') : unhide('.popup__type', popupType, type)
    room == '' ? popup.querySelector('.popup__room').classList.add('popup__hided') : unhide('.popup__room', popupRoom, room)
    teacher == '' ? popup.querySelector('.popup__teache').classList.add('popup__hided') : unhide('.popup__teache', popupTeacher, teacher)
    if (subject.find(value => value.name == title) !== undefined) {
        popupUrl.setAttribute('href', subject.find(value => value.name == title).url)
    } else {
        popupUrl.classList.add('popup__url_disabled')
    }
    switch (messageType){
        case ('1'):
            popupMessage.textContent = 'Занятие по обычному расписанию'
            break;
        case ('2'):
            popupMessage.textContent = 'Занятие только в этот день'
            popupMessage.classList.add('popup__message_red')
            break;
        case ('3'):
        popupMessage.textContent = 'Специальное'
        popupMessage.classList.add('popup__message_red')
        break;
    }
    popupButtonClose.addEventListener('click', evt => popupClose())
    popupOverlay.addEventListener('click', evt => popupClose())
    popup.classList.add('animation__open')
    popup.classList.add('popup_active')
}

function popupClose() {
    popupMessage.classList.remove('popup__message_red')
    popupUrl.classList.remove('popup__url_disabled')
    popup.classList.remove('animation__open');
    popup.classList.add('animation__close');
    function removeClasses() {
        popup.classList.remove('popup_active');
        popup.classList.remove('animation__close');
    }
    setTimeout(removeClasses, 500)
}

function setHeight(){
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );  
      popup.style.height = scrollHeight + 'px';
} 

window.addEventListener(`resize`, event => {setHeight();}, false);

setHeight();