let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let hole1 = document.getElementById('hole1');
let hole2 = document.getElementById('hole2');
let hole3 = document.getElementById('hole3');
let hole4 = document.getElementById('hole4');
let hole5 = document.getElementById('hole5');
let hole6 = document.getElementById('hole6');
let hole7 = document.getElementById('hole7');
let hole8 = document.getElementById('hole8');
let hole9 = document.getElementById('hole9');


// По какой-то причине код ниже не работает, на форумах ответа не нашел
// function game() {
//     getHole = index => document.getElementById(`hole${index}`)
//     for (let i = 0; i <= 9; i++) {
//         getHole(i).onclick = () => {
//             if (getHole(i).className == 'hole') {
//                 lost.textContent = Number(lost.textContent) + 1;
//             } else {
//                 dead.textContent = Number(dead.textContent) + 1;
//             };
//         };
//     };
// };
// game();

function winLose() {
    if ((dead.textContent == 10) && (lost.textContent < 5)) {
        window.alert('Победа!')
        dead.textContent = 0;
        lost.textContent = 0;
    } else if ((dead.textContent < 10) && (lost.textContent == 5)){
        window.alert('Вы проиграли!')
        dead.textContent = 0;
        lost.textContent = 0;
    };
}

function click1() {
    if (hole1.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click2() {
    if (hole2.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click3() {
    if (hole3.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click4() {
    if (hole4.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click5() {
    if (hole5.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click6() {
    if (hole6.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click7() {
    if (hole7.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click8() {
    if (hole8.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
};

function click9() {
    if (hole9.className !== 'hole') {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    };
    winLose();
}

hole1.onclick = click1;
hole2.onclick = click2;
hole3.onclick = click3;
hole4.onclick = click4;
hole5.onclick = click5;
hole6.onclick = click6;
hole7.onclick = click7;
hole8.onclick = click8;
hole9.onclick = click9;
