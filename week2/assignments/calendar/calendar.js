// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 


document.getElementById('go').addEventListener('click', printCalendar);
function printCalendar(){
    var selectedYear = document.getElementById('year');
    var selectedMonth = document.getElementById('month');
    //console.log(selectedYear);
    //console.log(selectedMonth);
    selectedYear = parseInt(selectedYear.value);
    //console.log(selectedMonth.value);
    selectedMonth = parseInt(selectedMonth.value);
    //console.log(selectedYear);
    //console.log(selectedMonth);


const today = new Date(`${selectedMonth + 1}/1/${selectedYear}`);
//console.log(today);
const month = today.getMonth();
//console.log(month);
let days;
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
};
//console.log(days);  
let calendarDays = document.getElementById('calendarDays');
calendarDays.innerHTML = ' ';
let x;
const weekday = today.getDay()
//console.log(weekday);
for (x = 0; x < weekday; x++){
    calendarDays.innerHTML += "<div class='blankDay'>&nbsp;</div>";
};

let dt = 0;
do {
    dt++;
    calendarDays.innerHTML += `<div class='calendarCell'>${dt}</div`;
} while ( dt < days);

const monthName = today.toLocaleDateString('default', {month:'long'});
const year = today.getFullYear();
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`;
const remainder = (7 - ((x + dt) % 7));
let y = 0;
while ( y < remainder) {
    calendarDays.innerHTML += "<div class='blankDay'>&nbsp;</div>";
    y++;
}; 
};

// Populates months in select options. Adds value as index of array. 
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let select = document.getElementById('month');
for (let i = 0; i < months.length; i++){
    let newOptions = document.createElement('option');
    newOptions.innerHTML = months[i];
    newOptions.setAttribute('value', months.indexOf(months[i]));
    select.append(newOptions);
};
printCalendar();
