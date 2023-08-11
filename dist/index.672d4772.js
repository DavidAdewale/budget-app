const footerDate = document.getElementById("year");
const currentYear = new Date().getFullYear();
footerDate.innerText = currentYear;
const dateInput = document.getElementById("date");
const currentDate = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", currentDate);

//# sourceMappingURL=index.672d4772.js.map
