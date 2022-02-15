const lessonTemplate = document.querySelector('.template_lesson').content;
const timeTemplate = document.querySelector('.template_time').content;
const today = new Date();
const weekDaysFromCalendarPc = [document.querySelector('#monday-pc'), document.querySelector('#tuesday-pc'), 
document.querySelector('#wednesday-pc'), document.querySelector('#thursday-pc'), document.querySelector('#friday-pc'),
document.querySelector('#saturday-pc'), document.querySelector('#sunday-pc')];
const weekDaysFromCalendarMb = [document.querySelector('#monday-mb'), document.querySelector('#tuesday-mb'), 
document.querySelector('#wednesday-mb'), document.querySelector('#thursday-mb'), document.querySelector('#friday-mb'),
document.querySelector('#saturday-mb'), document.querySelector('#sunday-mb')]
const weekDaysContainerPc = [document.querySelector('#content-monday-pc'), document.querySelector('#content-tuesday-pc'), document.querySelector('#content-wednesday-pc'),
document.querySelector('#content-thursday-pc'), document.querySelector('#content-friday-pc'), document.querySelector('#content-saturday-pc'), document.querySelector('#content-sunday-pc')];
const weekDaysContainerMb = [document.querySelector('#content-monday-mb'), document.querySelector('#content-tuesday-mb'), document.querySelector('#content-wednesday-mb'),
document.querySelector('#content-thursday-mb'), document.querySelector('#content-friday-mb'), document.querySelector('#content-saturday-mb'), document.querySelector('#content-sunday-mb')];
const weekTimeContainerPc = document.querySelector('#content-time-pc')
const weekTimeContainerMb = [document.querySelector('#content-time-mb-1'), document.querySelector('#content-time-mb-2'), document.querySelector('#content-time-mb-3'),
document.querySelector('#content-time-mb-4'), document.querySelector('#content-time-mb-5'), document.querySelector('#content-time-mb-6'), document.querySelector('#content-time-mb-7')];
const test = new Date(2022, 2, 17);
const weekName = document.querySelector('.week__name_bold');


function fillCallendar(day) {
    const normDay = day
    let copyDay = day;
    const weekDay = day.getDay();
    switch (weekDay) {
        case 1:
            for(let i = 0; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(normDay.getDate() + i);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            break;
        case 2:
            for(let i = 1; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(copyDay.getDate() + i - 1);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            copyDay.setDate(copyDay.getDate() - 1);
            weekDaysFromCalendarPc[0].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
            weekDaysFromCalendarMb[0].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
            copyDay = new Date(normDay)
            break;
        case 3:
            for(let i = 2; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(copyDay.getDate() + i - 2);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            for(let i = 0; i < 2; i ++){
                copyDay.setDate(copyDay.getDate() + i - 2);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)  
            }
            break;
        case 4:
            for(let i = 3; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(copyDay.getDate() + i - 3);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            for(let i = 0; i < 3; i ++){
                copyDay.setDate(copyDay.getDate() + i - 3);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            break;
        case 5:
            for(let i = 4; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(copyDay.getDate() + i - 4);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            
            for(let i = 0; i < 4; i ++){
                copyDay.setDate(copyDay.getDate() + i - 4);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            
            break;   
        case 6:
            for(let i = 5; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(copyDay.getDate() + i - 5);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            
            for(let i = 0; i < 5; i ++){
                copyDay.setDate(copyDay.getDate() + i - 5);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            
            break;   
        case 0:
            for(let i = 6; i < weekDaysFromCalendarPc.length; i ++){
                copyDay.setDate(copyDay.getDate() + i - 6);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            
            for(let i = 0; i < 6; i ++){
                copyDay.setDate(copyDay.getDate() + i - 6);
                weekDaysFromCalendarPc[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                weekDaysFromCalendarMb[i].textContent = `${copyDay.getDate()}.${(copyDay.getMonth() + 1)}`
                copyDay = new Date(normDay)
            }
            break; 
} 
}

function createLessonCard(title, type, room, teacher, num) {
    const newLessonCard = lessonTemplate.querySelector('.lesson').cloneNode(true);
    newLessonCard.querySelector('.lesson__title').textContent = title;
    newLessonCard.querySelector('.lesson__type').textContent = type;
    newLessonCard.querySelector('.lesson__room').textContent = room;
    newLessonCard.querySelector('.lesson__teacher').textContent = teacher;
    if (newLessonCard.querySelector('.lesson__title').textContent === '') {
        newLessonCard.classList.add('lesson_empty');
    }
    newLessonCard.querySelector('.lesson__title').addEventListener('click', evt => 
    openPopup(title, type, room, teacher, num))
    return newLessonCard; 
}

function createTimeCard(number, period) {
    const newTimeCard = timeTemplate.querySelector('.time').cloneNode(true);
    newTimeCard.querySelector('.time__number').textContent = number + '.';
    newTimeCard.querySelector('.time__period').textContent = period
    return newTimeCard; 
}

function fillContentDay(lessonsArray, day) {
    const date = new Date(`${today.getFullYear()}, ${day.split('.')[1]}, ${day.split('.')[0]}`);
    const dayContainer = [];
    const weekendsDay = weekends.find(function (value) {
        return (value.date.includes(day));
    })
    if (weekendsDay === undefined){
        for(let i = 0; i < 4; i++) {
        const specialLesson = specialLessons.find(function (value) {
            return (value.date.includes(day) && value.num.includes(i+1));
        })
        if (specialLesson === undefined) {
            if (lessonsArray[i] === undefined) {
                dayContainer.push({
                    num: '',
                    title: '',
                    room: '',
                    type: '',
                    teacher: '',
                    until: ''
                })
            } else {
            const lessonDate = new Date(`${today.getFullYear()}, ${lessonsArray[i].until.split('.')[1]}, ${lessonsArray[i].until.split('.')[0]}`);
            if (date <= lessonDate || lessonsArray[i].until === '') {
            dayContainer.push(lessonsArray[i])} 
            else { dayContainer.push({
                num: '',
                title: weekendsDay.title,
                room: '',
                type: '',
                teacher: '',
                until: ''
            })
            }
            }
            
        } else {
            dayContainer.push(specialLesson)
        }
        }} else { dayContainer.push({
            num: '',
            title: weekendsDay.title,
            room: '',
            type: '',
            teacher: '',
            until: ''
        })

        }
    return dayContainer;
    }

// lessonsArray.forEach( (value) => {
// dayContainer.append(createLessonCard(value.title, value.type, value.room, value.teacher))

function isWeekUnderLine() {
    const firstWeekDay = weekDaysFromCalendarPc[0].textContent;
    let weekType;
    const weekTypee = weekLessons[0].numWeek.some(function (value) {
        return value === firstWeekDay
    });
    weekTypee ? weekType = 0 : weekType = 1;
    return weekType;
}

function completeWeek(today) {
    fillCallendar(today);
    fillTimeShedule()
    fillWeekLessons();
    setWeekName();
}
function fillTimeShedule() {
    for (i = 0; i < timeTable.length; i++) {
        weekTimeContainerPc.append(createTimeCard(timeTable[i].num, timeTable[i].timePeriod))
        weekTimeContainerMb.forEach(function(value){
            value.append(createTimeCard(timeTable[i].num, timeTable[i].timePeriod))
        })
    }
}


function fillWeekLessons() {
    for (i = 0; i < 7; i++){
        fillContentDay(weekLessons[isWeekUnderLine()].schedule[i], weekDaysFromCalendarPc[i].textContent).forEach(value =>{
            weekDaysContainerPc[i].append(
                createLessonCard(value.title, value.type, value.room, value.teacher, value.num)
            );
        })
        fillContentDay(weekLessons[isWeekUnderLine()].schedule[i], weekDaysFromCalendarMb[i].textContent).forEach(value =>{
            weekDaysContainerMb[i].append(
                createLessonCard(value.title, value.type, value.room, value.teacher, value.num)
            );
        })
    }
}

function setWeekName() {
    weekName.textContent = weekLessons[isWeekUnderLine()].title
}
completeWeek(today)