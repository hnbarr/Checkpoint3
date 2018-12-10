'use strict';
$(document).ready(function() {
    //User Click Variable
    var clicks = 0; //user clicks
 
    //User-Click-Increase Total.
    $("#click").on("click", function(){
        clicks = clicks + 1;
        $("#clickCount").html(clicks);
    })
    
    //Auto Click Purchase, subtract cost.
    $("#auto").on("click", function(){
        clicks = clicks - 10;
        $("#clickCount").html(clicks);
    })

    // Speed Up Purchase, subtract cost.
    $("#speed").on("click", function(){
        clicks = clicks - 100;
        $("#clickCount").html(clicks);
    })

//CREATE FUNCTIONS TO...
// subtract from total when purchasing help
// DONE

// make 'clicks' reflect the help of purchased help, help-buttons + user-clicks!
// in process...

// make help buttons cost more clicks after proir purchasing, incrementing cost!
// haven't started yet...


});