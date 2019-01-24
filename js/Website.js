/**
 * SS - ScreenSwitcher - object used for switching pages of the app
 */
const SS = {
    screen1: document.getElementById("main"),
    screen2: document.getElementById("welcome"),
    screen3: document.getElementById("instruction"),
    screen4: document.getElementById("players"),
    screen5: document.getElementById("game"),
// method used to switching pages of the game
    _goNext: function(toHide, toShow) {
        toHide.style.display = "none";
        toShow.style.display = "flex";
        console.log();
        
    }
}

SS.screen2.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen2, SS.screen3);
});
SS.screen3.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen3, SS.screen4);
});
SS.screen4.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen1, SS.screen5);
});

