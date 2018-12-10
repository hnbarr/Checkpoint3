'use strict';
$(document).ready(function() {
    //Variable
    var clicks = 0; //user clicks
 
    //Click Function
    $("#click").on("click", function(){
        clicks = clicks + 1;
        $("#clickCount").html(clicks);
    });
});