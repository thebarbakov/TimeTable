const prevButton = document.querySelector('#week-button-prev')
const nextButton = document.querySelector('#week-button-next')
let firstDay = weekDaysFromCalendarMb[0].textContent
let lastDay = weekDaysFromCalendarMb[6].textContent

function plusDay(day){
    let date = new Date(`${day.split('.')[1]}/${day.split('.')[0]}/${today.getFullYear()}`);
    date.setDate(date.getDate() + 1);
    return date;
}

function minusDay(day){
    let date = new Date(`${day.split('.')[1]}/${day.split('.')[0]}/${today.getFullYear()}`);
    console.log(date);
    date.setDate(date.getDate() - 1)
    console.log(date);
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
    closeAnimation()
    clearDatas()
    completeWeek(minusDay(firstDay))
    firstDay = weekDaysFromCalendarMb[0].textContent
    lastDay = weekDaysFromCalendarMb[6].textContent
    openAnimation()
})

nextButton.addEventListener('click', evt => {
    closeAnimation()
    clearDatas()
    completeWeek(plusDay(lastDay))
    firstDay = weekDaysFromCalendarMb[0].textContent
    lastDay = weekDaysFromCalendarMb[6].textContent
    openAnimation()
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