const daydata = document.getElementById("day");
const hourdata = document.getElementById("hour");
const mindata = document.getElementById("min");
const secdata = document.getElementById("sec");

const sec = 1000;
const min = 60*sec;
const hr = 60*min;
const day = 24*hr;

function timerfunction(){
   
    const inputyear = new Date().getFullYear();
    const inputday = prompt("enter day").padStart(2,"0");
    const inputmonth = prompt("enter month").padStart(2,"0");
    let timerdate = (inputmonth+"/"+inputday+"/"+inputyear)




    setInterval(() => {
    
    const today = new Date().getTime();
    const timerday = new Date(timerdate).getTime();
    const difference = timerday-today;
    
        const leftdays = Math.floor(difference/day)+" days";
        const lefthours = Math.floor((difference%day)/hr)+" hours";
        const leftmins = Math.floor((difference%hr)/min)+" mins";
        const leftsec = Math.floor((difference%min)/sec)+" sec";
        daydata.innerText =leftdays;

    hourdata.innerText = lefthours;
    mindata.innerText = leftmins;
    secdata.innerText = leftsec;

    },0);
 


}


timerfunction()


