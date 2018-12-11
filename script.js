'use strict';
$(document).ready(function() {
    let clicks = 100; //user clicks.  change to 0 when done
    let autoCost = 10; //need to make this reflect increased cost!
    let speedCost = 100; //need to make this reflect increased cost!
    let total = 0;
    // let autoClick;


    //need to set up
    let autoClicks = 0; //automatically click once per second, updates total.
    let speedTime = 0; //speeds up the time for auto clicks, updates total.

    // User-Click-Increase Total.
    $("#click").on("click", function(){
        clicks = clicks + 1;
        total = clicks;
        $("#clickCount").html(clicks);
    })
    // Auto Click & Speed Up Purchased = subtract cost from total!
    $("#auto").on("click", function(){
        if (clicks >= autoCost){
            console.log("clicks = " +clicks);
            console.log("autocost = " +autoCost);
            clicks = clicks - autoCost;
            $("#clickCount").html(clicks);
        }
    })
    $("#speed").on("click", function(){
        if (clicks >= speedCost){
        console.log("clicks = " +clicks);
        console.log("speedCost = " +speedCost);
        clicks = clicks - speedCost;
        $("#clickCount").html(clicks);
        }
    })






//CREATE FUNCTIONS TO...
// subtract from total when purchasing help
// DONE

// make 'clicks' reflect the help of purchased help, help-buttons + user-clicks!
// in process...

// make help buttons cost more clicks after proir purchasing, incrementing cost!
// haven't started yet...


});