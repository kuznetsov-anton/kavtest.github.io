let nav = document.getElementById("nav");

console.log(nav);

let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");
let nav4 = document.getElementById("nav4");

let kurs1 = document.getElementById("k1");
let kurs2 = document.getElementById("k2");
let kurs3 = document.getElementById("k3");
let kurs4 = document.getElementById("k4");

document.addEventListener("click", function(event) {

    if (event.target.id === "n1") {
        nav1.className = 'visible';
        nav2.className = 'invisible';
        nav3.className = 'invisible';
        nav4.className = 'invisible';
    }

    if (event.target.id === "n2") {
        nav1.className = 'invisible';
        nav2.className = 'visible';
        nav3.className = 'invisible';
        nav4.className = 'invisible';
    }

    if (event.target.id === "n3") {
        nav1.className = 'invisible';
        nav2.className = 'invisible';
        nav3.className = 'visible';
        nav4.className = 'invisible';
    }

    if (event.target.id === "n4") {
        nav1.className = 'invisible';
        nav2.className = 'invisible';
        nav3.className = 'invisible';
        nav4.className = 'visible';
    }

    if (event.target.id === "kurs1") {
        if (nav2.className === 'visible') {
            kurs1.className = "t-vis";
            kurs2.className = "t-inv";
            kurs3.className = "t-inv";
            kurs4.className = "t-inv";
        }
    }

    if (event.target.id === "kurs2") {
        if (nav2.className === 'visible') {
            kurs1.className = "t-inv";
            kurs2.className = "t-vis";
            kurs3.className = "t-inv";
            kurs4.className = "t-inv";
        }
    }

    if (event.target.id === "kurs3") {
        if (nav2.className === 'visible') {
            kurs1.className = "t-inv";
            kurs2.className = "t-inv";
            kurs3.className = "t-vis";
            kurs4.className = "t-inv";
        }
    }

    if (event.target.id === "kurs4") {
        if (nav2.className === 'visible') {
            kurs1.className = "t-inv";
            kurs2.className = "t-inv";
            kurs3.className = "t-inv";
            kurs4.className = "t-vis";
        }
    }
});