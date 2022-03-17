const calendar = document.querySelector('.week__calendar');
const datepicker = new Datepicker(calendar, {
    // Whether or not to close the datepicker immediately when a date is selected.
    autohide: true,
    // Whether or not to show week numbers to the left of week rows.
    calendarWeeks: false,
    // If true, displays a "Clear" button at the bottom of the datepicker to clear the input value. 
    // If 'autoclose' is also set to true, this button will also close the datepicker.
    clearBtn: false,
    // Delimiter string to separate the dates in a multi-date string.
    dateDelimiter: '/',
    // Array of date strings or a single date string formatted in the given date format.
    datesDisabled: [],
    // Days of the week that should be disabled. 
    // Values are 0 (Sunday) to 6 (Saturday). 
    // Multiple values should be comma-separated. 
    daysOfWeekDisabled: [],
    // Days of the week that should be highlighted. Values are 0 (Sunday) to 6 (Saturday). 
    daysOfWeekHighlighted: [0, 6],
    // Date to view when initially opening the calendar. 
    // Date, String or Object with keys year, month, and day.
    // Defaults to today() by the program
    defaultViewDate: today, 
    // If true, no keyboard will show on mobile devices.
    disableTouchKeyboard: true,
    // Date format string.
    format: 'dd.mm',
    // The date format, combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.
    language: 'ru',
    // Maximum limit to selectable date. No limit is applied if null is set.
    maxDate: '31/07/2022',
    // Maximum number of dates users can select. No limit is applied if 0 is set.
    maxNumberOfDates: 1,
    // Muximum limit to the view that the date picker displayes. 0:days – 3:decades.
    maxView: 1,
    // Minimum limit to selectable date. No limit is applied if null is set.
    minDate: '01/01/2022',
    // HTML (or plain text) for the button label of the "Next" and "Prev" button.
    nextArrow: '»',
    prevArrow: '«',
    // left|right|auto for horizontal and top|bottom|auto for virtical.
    orientation: 'bottom right',
    // Whether or not to show the day names of the week.
    showDaysOfWeek: true,
    // If false, the datepicker will be prevented from showing when the input field associated with it receives focus.
    showOnFocus: true,
    // Show the date picker when the associated input filed is clicked
    showOnClick: true,
    // The view that the datepicker should show when it is opened. 
    // Accepts: 0 or "days" or "month", 1 or "months" or "year", 2 or "years" or "decade", 3 or "decades" or "century", and 4 or "centuries" or "millenium". 
    // Useful for date-of-birth datepickers.
    startView: 0,
    // The string that will appear on top of the datepicker. If empty the title will be hidden.
    title: '',
    // If true or "linked", displays a "Today" button at the bottom of the datepicker to select the current date. 
    // If true, the "Today" button will only move the current date into view; 
    // if "linked", the current date will also be selected.
    todayBtn: 'linked',
    // 0  focus Move the focused date to the current date without changing the selection
    // 1 select  Select (or toggle the selection of) the current date
    todayBtnMode: 1,
    // If true, highlights the current date.
    todayHighlight: false,
    // Update the selected date(s) with the input field's value when the input field is losing focus
    updateOnBlur: true,
    // The level that the date picker allows to pick. 0:date,1: month  or 2:year
    pickLevel: 0,
    // Day of the week start. 0 (Sunday) to 6 (Saturday)
    weekStart: 1
    // A function that takes a date as a parameter and returns one of the following values:
})
datepicker.setDate(today)

calendar.addEventListener('changeDate', event => {
    if (typeOfAction !== 1) {
    closeAnimation()
    clearDatas()
    completeWeek(datepicker.getDate())
    firstDay = weekDaysFromCalendarMb[0].textContent
    lastDay = weekDaysFromCalendarMb[6].textContent
    openAnimation()
    goToWeekday(setCentralWeek(datepicker.getDate().getDay()))
    }
})