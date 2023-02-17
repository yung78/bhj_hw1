const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let holeArr = [];


function winLose() {
    if ((dead.textContent == 10) && (lost.textContent < 5)) {
        window.alert('Победа!');
        dead.textContent = 0;
        lost.textContent = 0;
    } else if ((dead.textContent < 10) && (lost.textContent == 5)){
        window.alert('Вы проиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
    };
};


(function () {
    for (let i = 1; i <= 9; i++) {
        holeArr.push(document.getElementById(`hole${i}`));
    };
    for (let index = 0; index <= 8; index++) {
        holeArr[index].onclick = function () {
            if (holeArr[index].className !== 'hole') {
                dead.textContent = Number(dead.textContent) + 1;
            } else {
                lost.textContent = Number(lost.textContent) + 1;
            };
            winLose();
        };
    };
})();
