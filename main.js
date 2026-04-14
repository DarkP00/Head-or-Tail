uiLoad()
function playGame(guess){
    const score = JSON.parse(localStorage.getItem("score")) || {
        win: 0,
        lose: 0
    }
    let bord = Math.floor(Math.random() * 2) === 0 ? "head" : "tail";
    
    document.getElementById("bord").innerText = bord;

    if (bord === guess) {
        score.win++;
        document.getElementById("result").innerText = "you Win! 🔥🔥🔥";
    } else {
        document.getElementById("result").innerText = "you Lose! 😭😭😭";
        score.lose++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    uiLoad()
}
function reset(){
    localStorage.removeItem('score');
    uiLoad()
}
function uiLoad(){
    const score = JSON.parse(localStorage.getItem("score")) || {
        win: 0,
        lose: 0
    }
    document.getElementById('state').innerText = `Wins ${score.win} | Loses ${score.lose}`;
    console.log(score)
}
