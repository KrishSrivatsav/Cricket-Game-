// var arr1 = [];
// var arr2 = [];
// var p1p = [];
// var p2p = [];
// var count = 0;
// var count1 = 0;
// var balls = 18;
// var p1 = 5;
// var p2 = 5;
// var totscore;

// function Team1() {
//     var s = Math.floor(Math.random() * 7);
//     document.getElementById("yellow").innerText = s;
//     count++

//     arr1.push(s);
//     console.log(arr1);
//     if (s == 0) {
//         alert("wicket");
//         p1 = p1 + 1;
//     }
//     if (count == 18) {
//         alert("Game over");
//     }
//     if (count == 0 && p1 < 18) {
//         document.getElementById("yellow").disabled = true;

//     }

//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     const t = arr1.reduce(reducer);
//     console.log(t);

//     localStorage.setItem("cricket", t);
// }

// function Team2() {
//     var i = Math.floor(Math.random() * 7);
//     document.getElementById("blue").innerHTML = i;
//     count1++;

//     arr2.push(i);
//     console.log(arr2);
//     if (i == 0) {
//         alert("wicket");
//         p2 = p2 + 1;
//     }
//     if (count == 18) {
//         alert("Game over");

//     }
//     if (count1 == 0 && p2 > 18) {
//         document.getElementById("yellow").disabled = true;

//     }
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     const v = arr2.reduce(reducer);
//     console.log(v);

//     localStorage.setItem("match", v);

// }
// function result() {
//     window.location.href = "cric.html";
// }

var arr1 = [];
var arr2 = [];
var playerTotalScore = [];
var playerTotalScore2 = [];
var p = [];
var totscore;
var ballscount = 0;
var x = arr1.length;
var y = arr2.length;
var plycount = 0;
var wick1 = 10;
var wick2 = 10;

function Team1() {
    
    //timer for team 1
    var id1=0;
    var seconds=0;
    function print1(){
       document.getElementById("t11").innerHTML=seconds+"seconds" ;
       seconds++;
    }
    function p1(){
        id1=window.setInterval(print1,1000);
        if(id1 == 30){
            alert("Game time over team 1");
            return
        }
        
    }


    if (ballscount == 60 || wick1 == 0) {
        alert("Gameover for team 1");
        return
    }

    var s = Math.floor(Math.random() * 7);
    document.getElementById("player" + wick1).value += s + " ";
    arr1.push(s);
    let totalScore1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    document.getElementById("team1").value = totalScore1;
    ballscount++
    console.log(s);
    console.log(arr1);
    if (ballscount == 6 || s == 0) {
        playerTotalScore.push([document.getElementById("player" + wick1).value]);
        alert("wicket 1");
        console.log("pushed team 1");
        p.push(s);
        ballscount = 0;
        wick1--;
        console.log(wick1)
    }
    var object1 = {
        totalscoreTeam1: totalScore1,
        playersScore: playerTotalScore
    }
   
    localStorage.setItem("cricket", JSON.stringify(object1));


}



function Team2() {
    if (ballscount == 60 || wick2 == 0) {
        alert("Gameover for team 2");
        return
    }
    var i = Math.floor(Math.random() * 7);
    document.getElementById("play" + wick2).value += i + " ";
    arr2.push(i);
    let totalScore2 = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    document.getElementById("team2").value = totalScore2;
    ballscount++
    console.log(i);

    console.log(arr2);


    if (ballscount == 6 || i == 0) {
        playerTotalScore2.push([document.getElementById("play" + wick2).value]);
        alert("wicket 2");
        console.log("pushed team 2");
        p.push(i);
        ballscount = 0;
        wick2--;
    }
    var object2 = {
        totalscoreTeam2: totalScore2,
        playersScore2: playerTotalScore2
    }

    localStorage.setItem("match", JSON.stringify(object2));


}




function result() {
    console.log("result");
    window.location.href = "cric.html";
}