var watchNowModal = document.getElementById("watchNowModal")
var detailsModal = document.getElementById("detailsModal")
var watchNowBtn = document.getElementById("watchNowBtn")
var detailsBtn = document.getElementById("detailsBtn")
var closeWatchNow = document.getElementsByClassName("close")[0]
var closeDetails = document.getElementsByClassName("close")[1]
var video = document.getElementById("movie-trailer")

watchNowBtn.onclick = function() {
    watchNowModal.style.display = "flex"
}

detailsBtn.onclick = function() {
    detailsModal.style.display = "flex"
}

closeWatchNow.onclick = function() {
    document.location.reload()
    watchNowModal.style.display = "none"   
}

closeDetails.onclick = function() {
    detailsModal.style.display = "none"
}

window.onclick = function (event) {
    if(event.target == watchNowModal) {
        document.location.reload()
        watchNowModal.style.display = "none"
    }
    if(event.target == detailsModal) {
        detailsModal.style.display = "none"
    }
}


