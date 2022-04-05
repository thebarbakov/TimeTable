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
    if (title == 'Английский язык') {
        document.querySelector('.popup__url-t').style.display = 'flex';
        document.querySelector('.popup__url-t').setAttribute('href', subject.find(value => value.name == title).urlT)
    } else {
        document.querySelector('.popup__url-t').style.display = 'none';
    }
    if (subject.find(value => value.name == title) !== undefined && subject.find(value => value.name == title).url !== '') {
        popupUrl.setAttribute('href', subject.find(value => value.name == title).url)
    } else {
        popupUrl.classList.add('popup__url_disabled')
    }
    if (subject.find(value => value.name == title) !== undefined && subject.find(value => value.name == title).teacher !== '') {
        unhide('.popup__teache', popupTeacher, (subject.find(value => value.name == title).teacher))
    } else {
        popup.querySelector('.popup__teache').classList.add('popup__hided')
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
    popup.classList.remove('animation__open');
    popup.classList.add('animation__close');
    function removeClasses() {
        popup.classList.remove('popup_active');
        popup.classList.remove('animation__close');
        popupMessage.classList.remove('popup__message_red')
        popupUrl.classList.remove('popup__url_disabled')
        clearForm()
    }
    setTimeout(removeClasses, 500)
}

function clearForm(){
    popupTitle.textContent = ''
    popupTime.textContent = '' 
    popupType.textContent = '' 
    popupRoom.textContent = '' 
    popupTeacher.textContent = ''
}