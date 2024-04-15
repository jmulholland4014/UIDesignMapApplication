let currentUrl = window.location.href;
let match = currentUrl.match(/id=(\d+)/);
var currentId = match ? parseInt(match[1]) : 0

initialize();
function learn() {
    let nextId = currentId + 1;
    
    // Redirect to the new URL with incremented id
    if (nextId > 3){
        window.location.href = '/'
    }
    else{
        window.location.href = `/learn/id=${nextId}`;
    }
}

function initialize() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("fiveWrong");
    var span = document.getElementsByClassName("close")[0];

    if (currentId == 3){
        document.getElementById("nextBtn").innerHTML = "Finish";
    }

    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}