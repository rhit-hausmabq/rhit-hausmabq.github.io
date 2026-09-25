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
    let schedule = document.getElementById("schedule");
    let table = document.createAttribute("table");
    let timeHeader = document.createAttribute("th");
    let inputHeader = document.createAttribute("th");
    let headerRow = document.createAttribute("tr");
    timeHeader.innerHTML = "Time";
    inputHeader.innerHTML = "Things To Do";
    headerRow.appendChild(timeHeader);
    headerRow.appendChild(inputHeader);
    schedule.appendChild(table);

    // Loops through the table to create rows based on wake up time
    while(wakeTime <= 15){

        let row = document.createAttribute("tr");
        let timeData = document.createAttribute("td");
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
        let input = document.createAttribute("input");
        input.type = "text";
        let inputData = document.createAttribute("td");
        inputData.appendChild(input);
        row.appendChild(input);
        table.appendChild(row);
        wakeTime++;

    }

    // Does the same loop but up until sleep time
    sleepLoop = 4; // Min value for sleep time
    while(sleepLoop <= sleepTime){

        let row = document.createAttribute("tr");
        let timeData = document.createAttribute("td");
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
        let input = document.createAttribute("input");
        input.type = "text";
        let inputData = document.createAttribute("td");
        inputData.appendChild(input);
        row.appendChild(input);
        table.appendChild(row);
        sleepLoop++;

    }
    // Makes the save button appear after the table appears
    let save = document.getElementById("save");
    save.removeAttribute("hidden");
});
