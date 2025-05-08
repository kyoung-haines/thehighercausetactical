let recruitStatus = document.getElementById("recruit-status");

if (recruitStatus.innerHTML.toLocaleLowerCase() == "open") {
    recruitStatus.style.color = "green";
}

if (recruitStatus.innerHTML.toLocaleLowerCase() == "closed") {
    recruitStatus.style.color = "red";
}

let currentDate = new Date();

let dateElement = document.getElementById("date");

dateElement.innerHTML = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;