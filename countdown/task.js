const timer = document.getElementById('timer');
var countDown = setInterval(timerFunc, 1000);
var currentSecs = Number(timer.textContent);
   

function timerFunc() {
    var displayedSecs = currentSecs % 60;
    var displayedMin = Math.floor(currentSecs / 60) % 60;
    var displayedHrs = Math.floor(currentSecs / 60 /60);

    if(displayedMin <= 9) {
        displayedMin = "0" + displayedMin
    };
    if(displayedSecs <= 9) {
        displayedSecs = "0" + displayedSecs
    };
    if(displayedHrs <= 9) {
        displayedHrs = "0" + displayedHrs
    };

    currentSecs--;
    timer.innerHTML = displayedHrs + ":" + displayedMin + ":" + displayedSecs;
    if(currentSecs == -1) {
        clearInterval(countDown);
        window.alert("Вы победили в конкурсе!")
        location = 'https://www.dropbox.com/s/fqbgiqi37u6did9/Task%206.py?dl=1'
        window.location()
        // Загрузка котика)))
        // location = 'https://chudo-prirody.com/uploads/posts/2021-08/1628905045_202-p-skachat-foto-milikh-kotikov-216.jpg'
        // window.location()
    }
}