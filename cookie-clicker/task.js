let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speed = document.getElementById('clicker__speed');

let LastClickTime = 0;
let allTime = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};


async function clicker() {
    counter.textContent = Number(counter.textContent) + 1;
    let d = new Date();
    let time = d.getTime();
    let clickTime = 0
    if (LastClickTime == 0) {
        clickTime = 0
    } else {
        clickTime = (time - LastClickTime) / 1000;
    };
    allTime += clickTime;
    let midClicktime = allTime/Number(counter.textContent);
    let midClickSpeed = 0
    if (midClicktime == 0) {
        midClickSpeed = 0;
    } else {
        midClickSpeed = 1 / midClicktime;
    };
    speed.innerHTML = midClickSpeed.toFixed(3);
    // вариант с чередованием:
    // cookie.width = Number(counter.textContent) % 2 ? 230 : 200;
    
    // Но так интереснее:
    cookie.width += 30;
    await sleep(50);
    cookie.width -= 30;
    
    LastClickTime = time;
};



cookie.onclick = clicker;