/**
 * SS - ScreenSwitcher - object used for switching pages of the app
 */
const SS = {
    screen1: document.getElementById("main"),
    screen2: document.getElementById("welcome"),
    screen3: document.getElementById("instruction"),
    screen4: document.getElementById("players"),
    screen5: document.getElementById("game"),
    btn1: document.getElementById("goToPlayers"),
    btn2: document.getElementById("goToGame"),
    draw1: document.getElementById("goToDraw2"),
    draw2: document.getElementById("goToDraw3"),
    draw3: document.getElementById("goToDraw4"),
    btnPrev: document.getElementById("prevDraw"),
    btnNext: document.getElementById("nextDraw"),

// method used to switching pages of the game
    _goNext: function(toHide, toShow) {
        toHide.style.display = "none";
        toShow.style.display = "flex";
        console.log();
    },
    _switchVisibility: function(){

    }
}


SS.screen2.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen2, SS.screen3);
});
SS.btn1.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen3, SS.screen4);
});
SS.btn2.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen1, SS.screen5);
});


SS.btnPrev.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen1, SS.screen5);
});
SS.btnNext.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen1, SS.screen5);
});