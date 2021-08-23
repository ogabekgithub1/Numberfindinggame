let date = new Date();
let weekDay = date.getDay();
let hour    = date.getHours();
let minute  = date.getMinutes();
let second  = date.getSeconds();

let weekDays = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba",
];

let newHour = 0;
let times = 0;
if(hour < 12) {
     newHour = hour;
     times = "AM";
}else {
     newHour = hour - 12;
     times = "PM";
};

let time = `Today is : ${weekDays[weekDay - 1]} 
     Current Time is ${newHour} ${times}:${minute}:${second}`;

alert(time);
