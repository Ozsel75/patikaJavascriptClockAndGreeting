let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let name = prompt("Lütfen adınızı girin");
let myName = document.getElementById("myName");
myName.innerHTML = name;

function showTime() {
    let time = new Date();
    let day = days[time.getDay()];
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secs = time.getSeconds();
    document.getElementById("myClock").innerHTML= `${hours}: ${minutes}: ${secs} ${day} `;
}

setInterval(showTime, 1000);

