function hideCircle(circleId) {
    var circle = document.getElementById(circleId);
    if (circle.style.display === "none") {
        circle.style.display = "block";
    } else {
        circle.style.display = "none";
    }
}
