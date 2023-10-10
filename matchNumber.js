// 랜덤번호를 지정한다.
// 사용자가 번호를 입력한다. 그리고 go 라는 버튼을 클릭한다.
// 만약에 사용자가 랜덤번호를 맞추면, "맞췄습니다!"
// 만약에 랜덤번호가 사용자가 입력한 번호보다 작으면, "Down!"
// 만약에 랜덤번호가 사용자가 입력한 번호보다 크면, "Up!"
// reset 버튼을 누르면 게임이 초기화된다.
// 5번의 기회를 전부 소진하면 게임이 종료된다. (더이상 추측 불가, 버튼이 disable 된다.)
// 사용자가 1 ~ 100 범위 밖의 숫자를 입력하면 가이드를 제공하며 기회가 차감되지 않는다.
// 사용자가 이미 입력한 숫자를 중복으로 입력할 경우 가이드를 제공하며 기회가 차감되지 않는다.

let computerNumber = 0;

let playButton = document.querySelector("#playBtn");
let resetButton = document.querySelector("#resetBtn");
let userInput = document.querySelector("#userInput");
let resultArea = document.querySelector("#resultArea");
let chanceArea = document.querySelector("#chanceArea");
let chances = 5;
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => userInput.value = "");

function pickRandomNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1; // Math.random() : 랜덤한 숫자를 뽑을 수 있게 도와주는 함수
    console.log("정답 : ", computerNumber);
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해주세요.";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
        return;
    }

    chances--;
    chanceArea.textContent = `남은 찬스 : ${chances}`;

    if (userValue < computerNumber) {
        resultArea.textContent = "Up!";
    } else if (userValue > computerNumber) {
        resultArea.textContent = "Down!";
    } else {
        resultArea.textContent = "맞췄습니다!";
        gameOver = true;
    }

    history.push(userValue);
    
    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }

    userInput.value = "";
    userInput.focus();
}

function reset() {
    userInput.value = "";
    pickRandomNumber();
    resultArea.textContent = "This is result area.";
}

pickRandomNumber();