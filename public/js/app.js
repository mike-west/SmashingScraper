window.onload = function (event) {
    $("#index-submit").on("click", function(event) {
        event.preventDefault();
        console.log("index-submit btn clicked");
        
        var user = $("#user").val();
        var password = $("#password").val();
        
    });
}