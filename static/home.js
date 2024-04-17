//On id="learn" button press, the user is redirected to the learn page
function learn() {
    window.location.href = "/learn/id=1";
}

function quiz(){
    window.location.href = "/quiz/id=1";
}

function homePage(){
    window.location.href = "/";
}

initialize();

function initialize(){
    createLeaderBoard();
}


function createLeaderBoard(){
    var leaderboardElement = document.getElementById("leaderboard");
    var leaderboard = getLeaderBoard();
    console.log(typeof leaderboard)
    for (var i = 0; i < leaderboard.length; i++){
        var row = document.createElement("tr");
        var name = document.createElement("td");
        var time = document.createElement("td");
        name.innerHTML = leaderboard[i].name;
        time.innerHTML = leaderboard[i].time;
        row.appendChild(name);
        row.appendChild(time);
        leaderboardElement.appendChild(row);
    }
}

function getLeaderBoard(){
    //AJAX request to get the leaderboard
    var leaderboard;
    $.ajax({
        url: "/leaderboard",
        type: "GET",  // Change to GET
        async: false,
        success: function(data){
            leaderboard = data;
        }
    });

    return leaderboard;
}
