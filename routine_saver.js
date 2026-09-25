// Got the idea for this from a friend who took this class last year and created a budget calculator. I felt this was a pretty similar idea, but more useful for me right now.
let enter_button = document.getElementById("enter");
enter_button.addEventListener("click", function(){
    // Setting up objects and their values
    let wakeUp = document.getElementById("wake-up");
    let bedTime = document.getElementById("bed-time");
    let wakeTime = parseInt(wakeUp.value);
    if(wakeTime == 1 || wakeTime == 2 || wakeTime == 3){
        wakeTime = wakeTime + 12;
    }
    let sleepTime = parseInt(bedTime.value);
    if(sleepTime == 1 || sleepTime == 2 || sleepTime == 3){
        sleepTime = sleepTime + 12;
    }

    // Making the table 
    let table = document.getElementById("table");
    if(table.childElementCount != 0){
        table.replaceChildren();
    }
    let timeHeader = document.createElement("th");
    let inputHeader = document.createElement("th");
    let headerRow = document.createElement("tr");
    timeHeader.innerHTML = "Time";
    inputHeader.innerHTML = "Things To Do";
    headerRow.appendChild(timeHeader);
    headerRow.appendChild(inputHeader);

    // Loops through the table to create rows based on wake up time
    while(wakeTime <= 15){

        let row = document.createElement("tr");
        let timeData = document.createElement("td");
        if(wakeTime > 12) {
            timeData.innerHTML = wakeTime - 12 + ":00 PM";
        } 
        else if(wakeTime == 12){
            timeData.innerHTML = wakeTime + ":00 PM";
        }
        else{
            timeData.innerHTML = wakeTime + ":00 AM";
        }
        row.appendChild(timeData);
        let input = document.createElement("input");
        input.type = "text";
        let inputData = document.createElement("td");
        inputData.appendChild(input);
        row.appendChild(input);
        table.appendChild(row);
        wakeTime++;

    }

    // Does the same loop but up until sleep time
    sleepLoop = 4; // Min value for sleep time
    while(sleepLoop <= sleepTime){

        let row = document.createElement("tr");
        let timeData = document.createElement("td");
        if(sleepLoop > 12) {
            timeData.innerHTML = sleepLoop - 12 + ":00 AM";
        } 
        else if(sleepLoop == 12){
            timeData.innerHTML = sleepLoop + ":00 AM";
        }
        else{
            timeData.innerHTML = sleepLoop + ":00 PM";
        }
        row.appendChild(timeData);
        let input = document.createElement("input");
        input.type = "text";
        let inputData = document.createElement("td");
        inputData.appendChild(input);
        row.appendChild(input);
        table.appendChild(row);
        sleepLoop++;

    }
    // Makes the save button appear after the table appears
    let save = document.getElementById("save");
    save.removeAttribute("hidden");
});

let save = document.getElementById("save");
save.addEventListener("click", function(){
    localStorage.clear();
    let saveDataString = "";
    let tableRows = document.getElementById("table").children;
    for(let row of tableRows) {
        saveDataString = saveDataString + row.children[0].innerHTML + "-" + row.children[1].innerHTML + ", ";
    }
    localStorage.setItem("scheduleData", saveDataString);
    let test = document.getElementById("test");
    test.innerHTML = saveDataString;
    let message = document.getElementById("save-message");
    message.innerHTML = "Schedule data successfully saved!";
});

window.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("scheduleData") == null || localStorage.getItem("scheduleData") === null){
        return;
    }
    let rowValues = localStorage.getItem("scheduleData").split(", ");
    let table = document.getElementById("table");
    for(let value of rowValues){
        let rowEntries = value.split("-");
        let time = document.createElement("td");
        let inputData = document.createElement("td");
        let input = document.createElement("input");
        let row = document.createElement("tr");
        if(rowEntries[1] === null || rowEntries[1] == null || rowEntries[0] === null || rowEntries[0] == null){
            continue;
        }
        time.innerHTML = rowEntries[0];
        input.innerHTML = rowEntries[1];
        inputData.appendChild(input);
        row.appendChild(time);
        row.appendChild(inputData);
        table.appendChild(row);
    }
    save.removeAttribute("hidden");
});
