const lessonTemplate = document.querySelector('.template_lesson').content;
const clockTemplate = document.querySelector('.template_clock').content;
const timeTemplate = document.querySelector('.template_time').content;
//const today = new Date('03/18/2022 16:00');
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
const weekName = document.querySelector('.week__name_bold');
let lessonNow = {dom: '', num: '', weekDay: ''};
let nextLesson = {dom: '', num: '', day: '', obj: {title: ''}};
let firstDayCompleteWeek;
let lastDayCompleteWeek;
let typeOfAction = 0;


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

function createLessonCard(title, type, room, teacher, num, date) {
    let messageType;
    const newLessonCard = lessonTemplate.querySelector('.lesson').cloneNode(true);
    newLessonCard.querySelector('.lesson__title').textContent =  newLessonCard.querySelector('.lesson__title').textContent + title;
    newLessonCard.querySelector('.lesson__type').textContent = type;
    newLessonCard.querySelector('.lesson__room').textContent = room;
    newLessonCard.querySelector('.lesson__teacher').textContent = teacher == '' ? '' : `${teacher.split(' ')[0]} ${teacher.split(' ')[1].substr(0,1)}. ${teacher.split(' ')[2].substr(0,1)}.`;
    if (date !== undefined) {
        newLessonCard.querySelector('.lesson__ticket').classList.add('lesson__ticket_bp');
        newLessonCard.querySelector('.lesson__ticket').textContent = "????" 
        newLessonCard.querySelector('.lesson__ticket-des').textContent = "?????????????? ???????????? ?? ???????? ????????" 
        messageType = '2';
    } else if (room.length == 0) {
        newLessonCard.querySelector('.lesson__ticket').classList.add('lesson__ticket_sp');
        newLessonCard.querySelector('.lesson__ticket').textContent = "????" 
        newLessonCard.querySelector('.lesson__ticket-des').textContent = "??????????????????????"
        messageType = '3';
    }
    else if (date === undefined) {
        newLessonCard.querySelector('.lesson__ticket').classList.add('lesson__ticket_p');
        newLessonCard.querySelector('.lesson__ticket').textContent = "??" 
        newLessonCard.querySelector('.lesson__ticket-des').textContent = "?????????????? ???? ???????????????? ????????????????????" 
        messageType = '1';
    } 
    if (newLessonCard.querySelector('.lesson__title').textContent === '') {
        newLessonCard.classList.add('lesson_empty');
        newLessonCard.querySelector('.lesson__ticket').classList.remove('lesson__ticket_sp');
        newLessonCard.querySelector('.lesson__click').classList.add('lesson__click_empty');
        newLessonCard.querySelector('.lesson__ticket').textContent = "" 
        newLessonCard.querySelector('.lesson__ticket-des').textContent = "" 
    }
    newLessonCard.querySelector('.lesson__ticket').addEventListener('mouseenter', event => {
        newLessonCard.querySelector('.lesson__ticket-des').classList.add('lesson__ticket-des_active')
    })
    newLessonCard.querySelector('.lesson__ticket').addEventListener('mouseleave', event => {
        newLessonCard.querySelector('.lesson__ticket-des').classList.remove('lesson__ticket-des_active')
    })
    newLessonCard.querySelector('.lesson__ticket').addEventListener('touchstart', event => {
        newLessonCard.querySelector('.lesson__ticket-des').classList.add('lesson__ticket-des_active')
    })
    newLessonCard.querySelector('.lesson__ticket').addEventListener('touchend', event => {
        const timeHandlerTickets = () => newLessonCard.querySelector('.lesson__ticket-des').classList.remove
        ('lesson__ticket-des_active');
        setTimeout(timeHandlerTickets, 2000);
    })
    newLessonCard.addEventListener('click', evt => 
    openPopup(title, type, room, teacher, num, messageType))
    return newLessonCard; 
}

function createTimeCard(number, period) {
    const newTimeCard = timeTemplate.querySelector('.time').cloneNode(true);
    newTimeCard.querySelector('.time__number').textContent = number;
    newTimeCard.querySelector('.time__period').textContent = period.replace(' - ', ' -\u00A0')
    return newTimeCard; 
}

function fillContentDay(lessonsArray, day, dayZ) {
    let date;
    if (day == 0) {
        date = new Date(dayZ);
        day = `${date.getDate()}.${date.getMonth()+1}`
    } else {
        date = new Date(`${day.split('.')[1]}/${day.split('.')[0]}/${today.getFullYear()}`);
    }
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
            const lessonDate = new Date(`${lessonsArray[i].until.split('.')[1]}/${lessonsArray[i].until.split('.')[0]}/${today.getFullYear()}`);
            if (date <= lessonDate || lessonsArray[i].until === '') {
                dayContainer.push(lessonsArray[i])} 
                else { dayContainer.push({
                num: '',
                title: '',
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
    //const todayCom = new Date('03/18/2022 16:00');
    const todayCom = new Date();
    fillCallendar(today);
    fillTimeShedule()
    fillWeekLessons();
    setWeekName();
    if(`${today.getMonth()}/${today.getDate()}/${today.getFullYear()}` == `${todayCom.getMonth()}/${todayCom.getDate()}/${todayCom.getFullYear()}`) {
        setColorNow(todayCom)
        firstDayCompleteWeek = weekDaysFromCalendarMb[0].textContent
        lastDayCompleteWeek = weekDaysFromCalendarMb[6].textContent
    }
    if(`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}` == `${firstDayCompleteWeek.split('.')[1]}/${firstDayCompleteWeek.split('.')[0]}/${todayCom.getFullYear()}`) {
        setColorNow(todayCom)
    }
    if(`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}` == `${lastDayCompleteWeek.split('.')[1]}/${lastDayCompleteWeek.split('.')[0]}/${todayCom.getFullYear()}`) {
        setColorNow(todayCom)
    }
    document.querySelectorAll('.table__headers_date').forEach( element => {
        if (element.textContent == '17.3') {
            element.classList.add('table__headers_hb')
        } else {
            element.classList.remove('table__headers_hb')
        }
    })
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
        const day = new Date(`${weekDaysFromCalendarMb[i].textContent.split('.')[1]}/${weekDaysFromCalendarMb[i].textContent.split('.')[0]}/${today.getFullYear()}`)
        const weekNum = day.getDay();
        fillContentDay(weekLessons[isWeekUnderLine()].schedule[i], weekDaysFromCalendarPc[i].textContent).forEach(value =>{
            weekDaysContainerPc[i].append(
                createLessonCard(value.title, value.type, value.room, value.teacher, value.num, value.date)
            );
        })
        fillContentDay(weekLessons[isWeekUnderLine()].schedule[i], weekDaysFromCalendarMb[i].textContent).forEach(value =>{
            weekDaysContainerMb[i].append(
                createLessonCard(value.title, value.type, value.room, value.teacher, value.num, value.date)
            );
        })
        if (weekDaysContainerPc[i].querySelectorAll('.lesson').length == 1) {
                weekTimeContainerMb[i].innerHTML = '';
        }
    }
}

function setWeekName() {
    weekName.textContent = weekLessons[isWeekUnderLine()].title
}

function setColorNow(todayCom){
    const weekDayNum = todayCom.getDay();
    function setColor(weekday,lessonNum) {
        if (!weekDaysContainerMb[weekday].querySelectorAll('.lesson')[lessonNum].classList.contains('lesson_empty')) {
            weekDaysContainerPc[weekday].querySelectorAll('.lesson')[lessonNum].classList.add('lesson_active')
            weekDaysContainerMb[weekday].querySelectorAll('.lesson')[lessonNum].classList.add('lesson_active')
            lessonNow.dom = weekDaysContainerPc[weekday].querySelectorAll('.lesson')[lessonNum]
            lessonNow.num = lessonNum;
            lessonNow.weekDay = weekday;
            const newClock = clockTemplate.querySelector('.clock__img').cloneNode(true);
            newClock.addEventListener('mouseenter', event => {
                newClock.querySelector('.clock__text').classList.add('lesson__ticket-des_active')
            })
            newClock.addEventListener('mouseleave', event => {
                newClock.querySelector('.clock__text').classList.remove('lesson__ticket-des_active')
            })
            newClock.addEventListener('touchstart', event => {
                newClock.querySelector('.clock__text').classList.add('lesson__ticket-des_active')
            })
            newClock.addEventListener('touchend', event => {
                const timeHandlerTickets = () => newClock.querySelector('.clock__text').classList.remove
                ('lesson__ticket-des_active');
                setTimeout(timeHandlerTickets, 2000);
            })
            const newClockMb = newClock.cloneNode(true)
            newClockMb.addEventListener('mouseenter', event => {
                newClockMb.querySelector('.clock__text').classList.add('lesson__ticket-des_active')
            })
            newClockMb.addEventListener('mouseleave', event => {
                newClockMb.querySelector('.clock__text').classList.remove('lesson__ticket-des_active')
            })
            newClockMb.addEventListener('touchstart', event => {
                newClockMb.querySelector('.clock__text').classList.add('lesson__ticket-des_active')
            })
            newClockMb.addEventListener('touchend', event => {
                const timeHandlerTickets = () => newClockMb.querySelector('.clock__text').classList.remove
                ('lesson__ticket-des_active');
                setTimeout(timeHandlerTickets, 2000);
            })
            weekDaysContainerPc[weekday].querySelectorAll('.lesson')[lessonNum].append(newClock);
            weekDaysContainerMb[weekday].querySelectorAll('.lesson')[lessonNum].append(newClockMb);
        } 
        if (weekTimeContainerMb[weekday].querySelectorAll('.time')[lessonNum] !== undefined){
        weekTimeContainerPc.querySelectorAll('.time')[lessonNum].classList.add('time_active')
        weekTimeContainerMb[weekday].querySelectorAll('.time')[lessonNum].classList.add('time_active')
        }
    }
    const timePeridoFromOne = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[0].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[0].timePeriod.split(' - ')[0].split(':')[1]}`)
    timePeridoFromOne.setMinutes(timePeridoFromOne.getMinutes() - 10)
    const timePeridoToOne = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[0].timePeriod.split(' - ')[1].split(':')[0]}:${timeTable[0].timePeriod.split(' - ')[1].split(':')[1]}`)
    timePeridoToOne.setMinutes(timePeridoToOne.getMinutes() + 4)
    const timePeridoFromTwo = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[1].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[1].timePeriod.split(' - ')[0].split(':')[1]}`)
    timePeridoFromTwo.setMinutes(timePeridoFromTwo.getMinutes() - 4)
    const timePeridoToTwo = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[1].timePeriod.split(' - ')[1].split(':')[0]}:${timeTable[1].timePeriod.split(' - ')[1].split(':')[1]}`)
    timePeridoToTwo.setMinutes(timePeridoToTwo.getMinutes() + 5)
    const timePeridoFromThree = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[2].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[2].timePeriod.split(' - ')[0].split(':')[1]}`)
    timePeridoFromThree.setMinutes(timePeridoFromThree.getMinutes() - 10)
    const timePeridoToThree = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[2].timePeriod.split(' - ')[1].split(':')[0]}:${timeTable[2].timePeriod.split(' - ')[1].split(':')[1]}`)
    timePeridoToThree.setMinutes(timePeridoToThree.getMinutes() + 4)
    const timePeridoFromFour =new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[3].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[3].timePeriod.split(' - ')[0].split(':')[1]}`)
    timePeridoFromFour.setMinutes(timePeridoFromFour.getMinutes() - 4)
    const timePeridoToFour = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[3].timePeriod.split(' - ')[1].split(':')[0]}:${timeTable[3].timePeriod.split(' - ')[1].split(':')[1]}`)
    timePeridoToFour.setMinutes(timePeridoToFour.getMinutes() + 5)

    function compareTime() {
        if (todayCom >= timePeridoFromOne && todayCom <= timePeridoToOne) {
            return 0;
        } else if (todayCom >= timePeridoFromTwo && todayCom <= timePeridoToTwo) {
            return 1;
        } else if (todayCom >= timePeridoFromThree && todayCom <= timePeridoToThree) {
            return 2;
        } else if (todayCom >= timePeridoFromFour && todayCom <= timePeridoToFour) {
            return 3;
        }
    }
    if (compareTime() !== undefined)  {
        if (weekDaysContainerPc[setCentralWeek(weekDayNum)].querySelectorAll('.lesson').length == 4) {
            setColor(setCentralWeek(weekDayNum), compareTime())
            weekDaysFromCalendarPc[setCentralWeek(weekDayNum)].classList.add('table__headers_today')
            weekDaysFromCalendarMb[setCentralWeek(weekDayNum)].classList.add('table__headers_today')
        }  else if (weekDaysContainerPc[setCentralWeek(weekDayNum)].querySelectorAll('.lesson').length == 1) {
            weekDaysFromCalendarPc[setCentralWeek(weekDayNum)].classList.add('table__headers_today')
            weekDaysFromCalendarMb[setCentralWeek(weekDayNum)].classList.add('table__headers_today')
            setColor(setCentralWeek(weekDayNum), 0)
        }
        } else { 
        weekDaysFromCalendarPc[setCentralWeek(weekDayNum)].classList.add('table__headers_today')
        weekDaysFromCalendarMb[setCentralWeek(weekDayNum)].classList.add('table__headers_today')
        if (weekDaysContainerPc[setCentralWeek(weekDayNum)].querySelectorAll('.lesson').length == 1) {
            setColor(setCentralWeek(weekDayNum), 0)
        }
        }

        function compareTimeNext(today) {
            const todayCom = today;
            const timePeridoFromTwo = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[1].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[1].timePeriod.split(' - ')[0].split(':')[1]}`)
            timePeridoFromTwo.setMinutes(timePeridoFromTwo.getMinutes() - 6)
            const timePeridoFromThree = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[2].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[2].timePeriod.split(' - ')[0].split(':')[1]}`)
            timePeridoFromThree.setMinutes(timePeridoFromThree.getMinutes() - 50)
            const timePeridoFromFour =new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[3].timePeriod.split(' - ')[0].split(':')[0]}:${timeTable[3].timePeriod.split(' - ')[0].split(':')[1]}`)
            timePeridoFromFour.setMinutes(timePeridoFromFour.getMinutes() - 6)
            const timePeridoToFour = new Date(`${todayCom.getMonth()+1}/${todayCom.getDate()}/${todayCom.getFullYear()} ${timeTable[3].timePeriod.split(' - ')[1].split(':')[0]}:${timeTable[3].timePeriod.split(' - ')[1].split(':')[1]}`)
            timePeridoToFour.setMinutes(timePeridoToFour.getMinutes() + 5)
            if (todayCom <= timePeridoFromTwo) {
                return 0;
            } else if (todayCom >= timePeridoFromTwo && today < timePeridoFromThree) {
                return 1;
            } else if (todayCom >= timePeridoFromThree && today < timePeridoFromFour) {
                return 2;
            } else if (todayCom >= timePeridoFromFour && today < timePeridoToFour) {
                return 3;
            }
            }
            
            function setNextLesson(today){
                const normDay = today;
                let copyDay =  new Date(normDay);
                const fromWorkingHours = new Date(`${normDay.getMonth()+1}/${normDay.getDate()}/${normDay.getFullYear()} 8:00`)
                const toWorkingHours = new Date(`${normDay.getMonth()+1}/${normDay.getDate()}/${normDay.getFullYear()} 16:00`)
                if (weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson_empty').length == 4 ||
                weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelector('.lesson__ticket_sp') !== null) { //??????????????  ????????????????
                    copyDay.setDate(copyDay.getDate()+1)
                    const iterDate = new Date(copyDay)
                    for (let i = 0; i < 6; i++) {
                        if (nextLesson.obj == undefined || nextLesson.obj.title == '') {
                        if (setCentralWeek(copyDay.getDay())  + i >= 6){
                            const weekTypeNum = isWeekUnderLine() == 0 ? 1 : 0
                            iterDate.setDate(copyDay.getDate() + i)
                            nextLesson.obj =  fillContentDay(weekLessons[weekTypeNum].schedule[setCentralWeek(iterDate.getDay())], 0, iterDate).find( value =>
                                value.title !== '')
                            nextLesson.day = iterDate;
                        } else {
                            const weekTypeNum = isWeekUnderLine()
                            iterDate.setDate(copyDay.getDate() + i)
                            nextLesson.obj =  fillContentDay(weekLessons[weekTypeNum].schedule[setCentralWeek(iterDate.getDay())], 0, iterDate).find( value =>
                                value.title !== '')
                            nextLesson.day = iterDate;
                        } } else {break}
                    copyDay =  new Date(normDay);
                    }
                    copyDay =  new Date(normDay);
                } else { //?????????????? ?? ???????????? ???? ????????????????
                    if (document.querySelector('.lesson_active') !== null) {
                        if (weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 1] !== undefined &&!weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 1].classList.contains('lesson_empty')) {
                            nextLesson.dom = weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 1]
                            nextLesson.num = lessonNow.num +1
                            nextLesson.day = copyDay
                        } else if(weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 2] !== undefined && !weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 2].classList.contains('lesson_empty')) {
                            nextLesson.dom = weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 2]
                            nextLesson.num = lessonNow.num +2
                            nextLesson.day = copyDay
                        } else if (weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 3] !== undefined && !weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 3].classList.contains('lesson_empty')){
                            nextLesson.dom = weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[lessonNow.num + 3]
                            nextLesson.num = lessonNow.num + 3
                            nextLesson.day = copyDay
                        } else {setNextLessonNextDay()}
                    } else {
                        if (normDay >= fromWorkingHours && normDay <  toWorkingHours) {
                            for (let i = compareTimeNext(copyDay) == undefined ? 0 : compareTimeNext(copyDay); i < 5; i++){
                            if (weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[i] !== undefined && !weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[i].classList.contains('lesson_empty')) {
                                nextLesson.dom = weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[i]
                                nextLesson.num = i
                                nextLesson.day = copyDay
                                break;
                                } 
                            if (i == 4) {
                                console.log
                                setNextLessonNextDay();
                                break;
                            }
                            } 
                        } else if (normDay < fromWorkingHours) {
                            for (let i = 0; i < 4; i++) {
                                if (!weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[i].classList.contains('lesson_empty')) {
                                    nextLesson.dom = weekDaysContainerPc[setCentralWeek(normDay.getDay())].querySelectorAll('.lesson')[i]
                                    nextLesson.num = i
                                    nextLesson.day = copyDay
                                    break;
                                    } 
                                }
                        } else if (normDay > fromWorkingHours) {
                            copyDay.setDate(copyDay.getDate()+1)
                            const iterDate = new Date(copyDay)
                            if (weekDaysContainerPc[setCentralWeek(copyDay.getDay())].querySelectorAll('.lesson_empty').length == 4) {
                                for (let i = 0; i < 6; i++) {
                                    if (nextLesson.obj == undefined || nextLesson.obj.title == '') {
                                    if (setCentralWeek(copyDay.getDay()) + i >= 6){
                                        const weekTypeNum = isWeekUnderLine() == 0 ? 1 : 0
                                        iterDate.setDate(copyDay.getDate() + i)
                                        nextLesson.obj =  fillContentDay(weekLessons[weekTypeNum].schedule[setCentralWeek(iterDate.getDay())], 0, iterDate).find( value =>
                                            value.title !== '')
                                        nextLesson.day = iterDate;
                                    } else {
                                        const weekTypeNum = isWeekUnderLine(i)
                                        iterDate.setDate(copyDay.getDate() + i)
                                        nextLesson.obj =  fillContentDay(weekLessons[weekTypeNum].schedule[setCentralWeek(iterDate.getDay())], 0, iterDate).find( value =>
                                            value.title !== '')
                                        nextLesson.day = iterDate;
                                    }
                                } else {break}
                                copyDay =  new Date(normDay);
                                }
                            } else if (weekDaysContainerPc[setCentralWeek(copyDay.getDay())].querySelector('.lesson__ticket_sp') !== null) {
                                nextLesson.dom = weekDaysContainerPc[setCentralWeek(copyDay.getDay())].querySelectorAll('.lesson')[0]
                                nextLesson.num = 0
                                nextLesson.day = copyDay
                            } else {
                                for (let i = 0; i < 4; i++) {
                                    if (!weekDaysContainerPc[setCentralWeek(copyDay.getDay())].querySelectorAll('.lesson')[i].classList.contains('lesson_empty')) {
                                    nextLesson.dom = weekDaysContainerPc[setCentralWeek(copyDay.getDay())].querySelectorAll('.lesson')[i]
                                    nextLesson.num = i
                                    nextLesson.day = copyDay
                                    break
                                    }
                                }
                            }
                            copyDay =  new Date(normDay);
                        }
                    }
                    copyDay =  new Date(normDay);
                }
                function setNextLessonNextDay(){
                    copyDay.setDate(copyDay.getDate()+1)
                    const iterDate = new Date(copyDay)
                    for (let i = 0; i < 6; i++) {
                        if (nextLesson.obj == undefined || nextLesson.obj.title == '') {
                        if (setCentralWeek(copyDay.getDay())  + i >= 6){
                            const weekTypeNum = isWeekUnderLine() == 0 ? 1 : 0
                            iterDate.setDate(copyDay.getDate() + i)
                            nextLesson.obj =  fillContentDay(weekLessons[weekTypeNum].schedule[setCentralWeek(iterDate.getDay())], 0, iterDate).find( value =>
                                value.title !== '')
                            nextLesson.day = iterDate;
                        } else {
                            const weekTypeNum = isWeekUnderLine()
                            iterDate.setDate(copyDay.getDate() + i)
                            nextLesson.obj =  fillContentDay(weekLessons[weekTypeNum].schedule[setCentralWeek(iterDate.getDay())], 0, iterDate).find( value =>
                                value.title !== '')
                            nextLesson.day = iterDate;
                        } } else {break}
                        copyDay =  new Date(normDay);
                    }
                    }
            }
            setNextLesson(today)
        }
        function setCentralWeek(weekday) {
            if (weekday == 0) {
                return 6
            } else {
                return weekday - 1;
            }
        }

completeWeek(today);

