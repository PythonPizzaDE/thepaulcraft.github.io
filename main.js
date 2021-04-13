$(document).ready(function () {
    $("#services").hide();
    $("#serviceslink").click(function () {
        $("#services").toggle(1000);
    });
});

function AcceptCookies() {
    document.getElementById("cookiebanner").remove();
}