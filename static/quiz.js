let currentUrl = window.location.href;
let match = currentUrl.match(/id=(\d+)/);
var currentId = match ? parseInt(match[1]) : 0

initialize();
function quiz() {
    let nextId = currentId + 1;
    
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
}