let recruitStatus = document.getElementById("recruit-status");

if (recruitStatus.innerHTML.toLocaleLowerCase() == "open") {
    recruitStatus.style.color = "green";
}

if (recruitStatus.innerHTML.toLocaleLowerCase() == "closed") {
    recruitStatus.style.color = "red";
}

