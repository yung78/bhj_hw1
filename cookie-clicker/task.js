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
    if (LastClickTime == 0) {
        let clickTime = 0
    } else {
        let clickTime = (time - LastClickTime) / 1000;
    };
    allTime += clickTime;
    let midClicktime = allTime/Number(counter.textContent);
    if (midClicktime == 0) {
        let midClickSpeed = 0;
    } else {
        let midClickSpeed = 1 / midClicktime;
    };
    speed.innerHTML = midClickSpeed.toFixed(3);
    // вариант с чередованием:
    // if (Number(counter.textContent) % 2 !== 0) {
    //     cookie.width += 30;
    //     cookie.height += 30;
    // } else {
    //     cookie.width -= 30;
    //     cookie.height -= 30;
    // };
    
    // Но так интереснее:
    cookie.width += 30;
    cookie.height += 30;
    await sleep(50);
    cookie.width -= 30;
    cookie.height -= 30;
    
    LastClickTime = time;
};



cookie.onclick = clicker;