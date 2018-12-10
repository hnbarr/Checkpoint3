'use strict';
$(document).ready(function() {
    let clicks = 0; //user clicks.
    let autoCost = 10; //need to make this reflect increased cost!
    let speedCost = 100; //need to make this reflect increased cost!


    //need to set up
    let autoClicks = 0; //automatically click once per second, updates total.
    let speedTime = 0; //speeds up the time for auto clicks, updates total.

    // User-Click-Increase Total.
    $("#click").on("click", function(){
        clicks = clicks + 1;
        $("#clickCount").html(clicks);
    })

    // NOT WORKING FULLY!

    // Auto Click & Speed Up Purchased = subtract cost from total!
    $("#auto").on("click", function(){
        if ($("#clickCount" > (autoCost))){
            clicks = clicks - autoCost;
            $("#clickCount").html(clicks);
        } else if  ($(autoCost) > ("#clickCount")){
            console.log('Unable to purchase, you have less than cost!')
            }//not working!
        //need to make unable to buy if cost > total!
    })
    $("#speed").on("click", function(){
        if ($("#clickCount" > (speedCost))){
        clicks = clicks - speedCost;
        $("#clickCount").html(clicks);
        } else; 
        //need to make unable to buy if cost > total!
    })







//CREATE FUNCTIONS TO...
// subtract from total when purchasing help
// DONE

// make 'clicks' reflect the help of purchased help, help-buttons + user-clicks!
// in process...

// make help buttons cost more clicks after proir purchasing, incrementing cost!
// haven't started yet...


});