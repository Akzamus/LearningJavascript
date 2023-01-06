"use strict";

document.querySelectorAll(".bi-x-circle").forEach((element, i) => {
    element.onclick = () => document.getElementById(`card${i + 1}`).remove();
});

document.querySelectorAll(".bi-basket").forEach(element => {
    element.onclick = () => {
        element.classList.remove("bi-basket");
        element.classList.add("bi-currency-dollar");
        element.style.color = "green";
    };
});