/**
 * SS - ScreenSwitcher - object used for switching pages of the app
 */
const SS = {
    // DOM Elems stored
    screen1: document.getElementById("main"),
    screen2: document.getElementById("welcome"),
    screen3: document.getElementById("instruction"),
    screen4: document.getElementById("players"),
    screen5: document.getElementById("game"),
    btnPrev: document.getElementById("prevDraw"),
    btnNext: document.getElementById("nextDraw"),
    btnSkip: document.getElementById("skip"),
    btn1: document.getElementById("goToGame"),
    instr1: document.getElementById("instr"),
    draw1: document.getElementById("draw-1"),

    drawIndex: 0,

// method used to switching pages of the welcome screen
    _goNext: function(toHide, toShow) {
        toHide.style.display = "none";
        toShow.style.display = "flex";
    },
// method used for changing visibility
    _switchVisibility: function(n){
        let i;
        let draws = document.getElementsByClassName("mainScreen__drawContainer");
            if (n > draws.length) {
                    this.drawIndex = 1
                } 
                if (n < 1) {
                    this.drawIndex = draws.length
                }
                for (i = 0; i < draws.length; i++) {
                    draws[i].style.display = "none"; 
                }
        draws[this.drawIndex-1].style.display = "flex"; 
        },
// method userd for switching instruction draws
    plusMinusDraws: function(numb) {
            this._switchVisibility(this.drawIndex += numb);
        }
    }

/** 
* IV = Input Validator - object used for form validation
*
*/
const IV = {
    saveNames: function() {
        const playersArr = [];
        let whitePlayer = document.getElementById("whitePlayer").value;
        let blackPlayer = document.getElementById("blackPlayer").value;

        playersArr.push( whitePlayer,blackPlayer);
        return playersArr;
    },
    inputValidator: function () {
        let playersArr = this.saveNames();
        
        if (playersArr[0] !== "" && playersArr[1] !== ""){
                SS._goNext(SS.screen1, SS.screen5);
                IV.saveNames();  
        } else {
            alert("Please write players names");
        }
    }
}

/**
 *  NS - Names Shower - object used for showing names of players on gamescreen
 */

const NS = {
    white: document.getElementById("white"),   
    black: document.getElementById("black"),
    writeNames: function(forWhite, forBlack){
        this.white.innerText = forWhite;
        this.black.innerText = forBlack;
    }
}

/**
 *  DS - Device Size - object used for loading proper size of photo when is mobile device
 */
const DS = {

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
    let playersArr = IV.saveNames();
    IV.inputValidator();
    NS.writeNames(playersArr[0], playersArr[1]);
});
// slide switches
SS.btnPrev.addEventListener("click", function(e){
    e.preventDefault();
    SS.plusMinusDraws(-1);
});

SS.btnNext.addEventListener("click", function(e){
    e.preventDefault();
    SS.plusMinusDraws(1);
});
SS.btnPrev.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.instr1,SS.draw1);
})
SS.btnNext.addEventListener("click", function(e){
    e.preventDefault();
    SS._goNext(SS.instr1, SS.draw1);
})







