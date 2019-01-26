/**
 * SS - ScreenSwitcher - object used for switching pages of the app
 */
const SS = {
    screen1: document.getElementById("main"),
    screen2: document.getElementById("welcome"),
    screen3: document.getElementById("instruction"),
    screen4: document.getElementById("players"),
    screen5: document.getElementById("game"),
    btnPrev: document.getElementById("prevDraw"),
    btnNext: document.getElementById("nextDraw"),
    btnSkip: document.getElementById("skip"),
    btn1: document.getElementById("goToGame"),

// method used to switching pages of the game
    _goNext: function(toHide, toShow) {
        toHide.style.display = "none";
        toShow.style.display = "flex";
    },
    _switchVisibility: function(){

    }
}

// main screen switches
SS.screen2.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen2, SS.screen3);
});
SS.btnSkip.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen3, SS.screen4);
});
SS.btn1.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.screen1, SS.screen5);
    IV.saveNames();    
});

/** 
* IV = Input Validator - object used for form validation
*
*/

const IV = {
    saveNames: function() {
        const playersArr = [];
        const whitePlayer = document.getElementById("whitePlayer").value;
        const blackPlayer = document.getElementById("blackPlayer").value;
        playersArr.push( whitePlayer,blackPlayer);
        console.log(playersArr);
        return playersArr;
    },
    inputValidator: function () {
        
    console.log("test", this.saveNames());
    
    }
}
IV.inputValidator();








