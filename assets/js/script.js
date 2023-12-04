const quesAns = [
    [" 5 + 2 ? ", "5", "7", "8", "1", "2"],
    [" 5 - 2 ? ", "3", "7", "8", "9", "1"],
    [" 5 * 2 ? ", "15", "17", "18", "10", "4"],
    [" 5 / 2 ? ", "2.5", "7", "80", "10", "1"],
    [" 5 % 2 ? ", "5", "7", "8", "1", "4"]
];

let x = 0 ;
let score = 0;

function printQA() {

    document.getElementById("ques").innerHTML = quesAns[x][0];
    document.getElementById("ans1").innerHTML = quesAns[x][1];
    document.getElementById("ans2").innerHTML = quesAns[x][2];
    document.getElementById("ans3").innerHTML = quesAns[x][3];
    document.getElementById("ans4").innerHTML = quesAns[x][4];

}

printQA();

function submitAns(ans) {
    // ans check ho rha hai
    if ( ans == quesAns[x][5] ) {
        score += 5;
    } else {
        score -= 2;
    }
    // score print ho rha hai
    document.getElementById("scord_id").innerHTML = 'SOCRE : '+score ;
    // next ques print ho rha hai
    x++;
    printQA();

    if (x == 4 ) {
        document.getElementById("quiz").innerHTML = "QUIZ END !!! <br>SOCRE : " + score ;
    }
}

// setInterval ( () => {
//     x++;
//     printQA();
// },2000);