let currentUrl = window.location.href;
let match = currentUrl.match(/id=(\d+)/);
var currentId = match ? parseInt(match[1]) : 0
let seconds = null;

function startTimer() {
    timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerId);
}

function setSeconds() {
    //Post request passing a JSON object with the time
    $.ajax({
        url: `/setSeconds`,
        type: "POST",
        data: JSON.stringify({seconds: seconds}),
        contentType: "application/json",
        success: function(data){
            console.log(data);
        }
    });
}
initialize();
function quiz() {
    let nextId = currentId + 1;
    setSeconds()
    // Redirect to the new URL with incremented id
    if (nextId > 5){
        window.location.href = '/results/score=100'
    }
    else{
        window.location.href = `/quiz/id=${nextId}`;
    }
}

function initialize() {
    if (currentId == 5){
        document.getElementById("nextBtn").innerHTML = "Finish";
    }
    createQuiz();
    seconds = getSeconds();
    startTimer();
}

function getSeconds() {
    if (currentId == 1) {
        return 0;
    }
    let seconds;
    $.ajax({
        url: `/getSeconds`,
        type: "GET",
        async: false,
        success: function(data){
            seconds = data;
        }
    });
    return seconds;
}

function createQuiz() {
    var islandMap = getIsland();
    console.log(islandMap);
    var islandElement = document.getElementById("islandImg");
    islandElement.src = islandMap.location;
}

function getIsland() {
    let island;
    $.ajax({
        url: `/getRandomIsland`,
        type: "GET",
        async: false,
        success: function(data){
            island = data;
        }
    });
    return island;
}