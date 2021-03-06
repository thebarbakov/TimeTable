const prevButton = document.querySelector('#week-button-prev')
const nextButton = document.querySelector('#week-button-next')
let firstDay = weekDaysFromCalendarMb[0].textContent
let lastDay = weekDaysFromCalendarMb[6].textContent
const nextWeek = document.querySelector('.table__nextweek')

function plusDay(day){
    let date = new Date(`${day.split('.')[1]}/${day.split('.')[0]}/${today.getFullYear()}`);
    date.setDate(date.getDate() + 1);
    return date;
    
}

function minusDay(day){
    let date = new Date(`${day.split('.')[1]}/${day.split('.')[0]}/${today.getFullYear()}`);
    date.setDate(date.getDate() - 1)
    return date;
}

function openAnimation() {
    document.querySelector('.table_pc').classList.add('animation__close')
    document.querySelector('.table_mb').classList.add('animation__close')
    function animationDelay() {
        document.querySelector('.table_pc').classList.remove('animation__close')
        document.querySelector('.table_mb').classList.remove('animation__close')
        document.querySelector('.table_pc').classList.remove('animation__close')
        document.querySelector('.table_mb').classList.remove('animation__close')
    }
    setTimeout(animationDelay, 500);
}

function closeAnimation() {
    document.querySelector('.table_pc').classList.add('animation__close')
    document.querySelector('.table_mb').classList.add('animation__close')
}

prevButton.addEventListener('click', evt => {
    typeOfAction = 1;
    closeAnimation()
    clearDatas()
    datepicker.setDate(minusDay(firstDay));
    completeWeek(minusDay(firstDay))
    firstDay = weekDaysFromCalendarMb[0].textContent
    lastDay = weekDaysFromCalendarMb[6].textContent
    openAnimation()
    typeOfAction = 0;
})

nextButton.addEventListener('click', evt => {
    typeOfAction = 1;
    closeAnimation()
    clearDatas()
    datepicker.setDate(plusDay(lastDay));
    completeWeek(plusDay(lastDay))
    firstDay = weekDaysFromCalendarMb[0].textContent
    lastDay = weekDaysFromCalendarMb[6].textContent
    openAnimation()
    typeOfAction = 0;
})

function clearDatas(){
    weekTimeContainerPc.innerHTML = ''
    weekTimeContainerMb.forEach(value =>{
        value.innerHTML = ''})
    weekDaysContainerPc.forEach(value =>{
        value.innerHTML = ''})
    weekDaysContainerMb.forEach(value =>{
        value.innerHTML = ''})
    weekDaysFromCalendarPc.forEach(value => {
        value.classList.remove('table__headers_today')
    })
    weekDaysFromCalendarMb.forEach(value => {
        value.classList.remove('table__headers_today')
    })
}

nextWeek.addEventListener('click', evt => {
    typeOfAction = 1;
    closeAnimation()
    clearDatas()
    completeWeek(plusDay(lastDay))
    datepicker.setDate(plusDay(lastDay));
    firstDay = weekDaysFromCalendarMb[0].textContent
    lastDay = weekDaysFromCalendarMb[6].textContent
    goToWeekday(0)
    openAnimation()
    typeOfAction = 0;
})