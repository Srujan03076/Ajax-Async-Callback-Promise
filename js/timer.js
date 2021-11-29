//UC1:Demonstrate Asynchronous nature of Javascript
function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Minutes:" + date.getSeconds() + "Secs:";
}

function showSessionExpire(){
    console.log("Activity B: Your session expired at "+showTime());
}

console.log("Activity A: Triggering Activity-B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity A: Triggering Activity-B at "+showTime() +"will execute after 5 Seconds");