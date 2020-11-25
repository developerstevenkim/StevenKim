// Project Buttons
let btnFirstProject = document.getElementById("firstProject");
let btnSecondProject = document.getElementById("secondProject");
let btnSecondProject2 = document.getElementById("secondProject2");
let btnThirdProject = document.getElementById("thirdProject");
let pro1 = document.getElementById("project1");
let pro2 = document.getElementById("project2");
let pro3 = document.getElementById("project3");

// Submit form
const form = document.querySelector('.contactForm');
const inputName = form.querySelector('#name');
const inputEmail = form.querySelector("#email");
const inputSubject = form.querySelector("#subject");
const inputContext = form.querySelector("#context");

// Skill bar
let displayPointbar = document.getElementById("userBar");

// Timeout for bar
const timeout = 500;

// Get date
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

// Skill score
let skillScore = [
    83, 95, 80, 83, 80, 88
];


// Bar display function
function skillBar() {
    for (let i = 0; i < skillScore.length; i++) {
        setTimeout(() => {
            document.getElementById("bar" + (i + 1)).style.width = skillScore[i] + "%";
            document.getElementById("bar" + (i + 1)).style.transition = "all 1s";
        }, timeout);
        setTimeout(() => {
            document.getElementById("bar" + (i + 1)).innerHTML = skillScore[i] + " %";

            document.getElementById("bar" + (i + 1)).style.color = "skyblue";
            document.getElementById("bar" + (i + 1)).style.fontSize = "0vh";
            setTimeout(function () {
                document.getElementById("bar" + (i + 1)).style.color = "black";
                document.getElementById("bar" + (i + 1)).style.fontSize = "2.5vh";
            }, timeout);
        }, timeout * 2);
    }
}

// form submit function
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        db.collection("users").add({
                name: inputName.value,
                email: inputEmail.value,
                subject: inputSubject.value,
                context: inputContext.value,
                post_date: dateTime
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

        //shows alert if everything went well.
        return alert('Thank you for reaching out! I will contact you shortly.');
    })
}

btnSecondProject.onclick = function clickFirToSec() {
    pro1.style.display = "none";
    pro1.style.left = "10%";
    pro2.style.display = "block";
    pro2.style.position = "relative";
    setTimeout(function() {
        pro2.style.left = "0%";
        pro2.style.transition = "left 1s";
    }, 0);
    
};

btnFirstProject.onclick = function clickSecToFir() {
    pro2.style.display = "none";
    pro2.style.left = "-10%";
    pro1.style.display = "block";
    pro1.style.position = "relative";
    setTimeout(function() {
        pro1.style.left = "0%";
        pro1.style.transition = "left 1s";
    }, 0);
}

btnThirdProject.onclick = function clickSecToThi() {
    pro2.style.display = "none";
    pro2.style.left = "10%";
    pro3.style.display = "block";
    pro3.style.position = "relative";
    setTimeout(function() {
        pro3.style.left = "0%";
        pro3.style.transition = "left 1s";
    }, 0);
}

btnSecondProject2.onclick = function clickThiToSec() {
    pro3.style.display = "none";
    pro3.style.left = "-10%";
    pro2.style.display = "block";
    pro2.style.position = "relative";
    setTimeout(function() {
        pro2.style.left = "0%";
        pro2.style.transition = "left 1s";
    }, 0);
}


// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-6W3G9VRYS1');