const slider = document.querySelector('.slider')
const sliderNow = document.querySelector('#slider-now')
const sliderNowText = document.querySelector('#slider-now-text')
const sliderNowNum = document.querySelector('#slider-now-when')
const sliderAfter = document.querySelector('#slider-after')
const sliderAfterText = document.querySelector('#slider-after-text')
const sliderAfterNum = document.querySelector('#slider-after-when')
const sliderAfterDate = document.querySelector('#slider-after-day')
const sliderButton = document.querySelector('.slider__button')

if (lessonNow.dom !== '') {
    const lessonNowTitle = lessonNow.dom.querySelector('.lesson__title')
    sliderNowText.textContent = lessonNowTitle.textContent
    sliderNowNum.textContent = timeTable[lessonNow.num].timePeriod
    if (lessonNow.dom.querySelector('.lesson__room').textContent !== ''){
    sliderNowText.addEventListener('click', event => openPopup(lessonNowTitle.textContent, lessonNow.dom.querySelector('.lesson__type').textContent,
    lessonNow.dom.querySelector('.lesson__room').textContent, lessonNow.dom.querySelector('.lesson__teacher').textContent, lessonNow.num + 1, lessonNow.dom.querySelector('.lesson__ticket-des').textContent))
    }
} else if (lessonNow.dom == ''){
    sliderNow.classList.add('slider__now_disable')
}
console.log(nextLesson)

if (nextLesson.dom !== ''){
    const dayOfNextLesson = `${nextLesson.day.getDate()}.${nextLesson.day.getMonth()+1}`
    const weekDayOfNextLesson = nextLesson.day.getDay() == 6 ? 0 : nextLesson.day.getDay() + 1;
    sliderAfterText.textContent = nextLesson.dom.querySelector('.lesson__title').textContent
    sliderAfterDate.textContent = dayOfNextLesson
    if (nextLesson.dom.querySelector('.lesson__room').textContent !== ''){
    sliderAfterNum.textContent = timeTable[nextLesson.num].timePeriod
    }
    sliderAfterText.addEventListener('click', event => openPopup(sliderAfterText.textContent, nextLesson.dom.querySelector('.lesson__type').textContent,
    nextLesson.dom.querySelector('.lesson__room').textContent, nextLesson.dom.querySelector('.lesson__teacher').textContent, nextLesson.num + 1, nextLesson.dom.querySelector('.lesson__ticket-des').textContent))
} else if (nextLesson.obj !== undefined){
    const dayOfNextLesson = `${nextLesson.day.getDate()}.${nextLesson.day.getMonth()+1}`
    const weekDayOfNextLesson = nextLesson.day.getDay() == 6 ? 0 : nextLesson.day.getDay() + 1;
    sliderAfterText.textContent = nextLesson.obj.title
    sliderAfterDate.textContent = dayOfNextLesson
    if (nextLesson.obj.room !== ''){
        sliderAfterNum.textContent = timeTable[nextLesson.obj.num - 1].timePeriod
        }
    sliderAfterText.addEventListener('click', event => openPopup(nextLesson.obj.title, nextLesson.obj.type,
        nextLesson.obj.room, nextLesson.obj.teacher, nextLesson.obj.num, function(){
            if (nextLesson.dom.querySelector('.lesson__room').textContent !== ''){
               return timeTable[nextLesson.obj.num].timePeriod
            }
        }, function(){
            if (nextLesson.obj.date !== undefined) {
                return "Занятие только в этот день" 
            } else if (nextLesson.obj.room.length == 0) {
                return "Специальное"
            }
            else if (nextLesson.obj.date === undefined) {
                return "Занятие по обычному расписанию" 
            } 
        }))
} else {
    console.log('Что-то сломалось')
}

sliderButton.addEventListener('click', event => {
    if (event.target.classList.contains('slider__button_down')) {
        slider.classList.add('slider__up');
        sliderButton.classList.add('slider__button_up')
        setTimeout( () => {
            slider.classList.remove('slider__down');
            sliderButton.classList.remove('slider__button_down')
        }, 700)
    } else {
        slider.classList.add('slider__down');
        sliderButton.classList.add('slider__button_down')
        setTimeout( () => {
            slider.classList.remove('slider__up');
            sliderButton.classList.remove('slider__button_up')
        }, 700)
}})

// function openSlider(event){

// }

// function closeSlider(event){
    
// }