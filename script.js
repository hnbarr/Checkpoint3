'use strict';
$(document).ready(function() {
    let clicks = 0; //user clicks.  change to 0 when done
    let autoCost = 10; //need to make this reflect increased cost!
    let speedCost = 100; //need to make this reflect increased cost!
    var button = $("#click");
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

    // Function to have auto clicker self click 1x per 5 seconds
    $("#auto").on("click", function(){
        setInterval(function(){
        (button).trigger("click");
        console.log("i am going to add a click every 5 seconds!");
        }, 5000);
    })

    // Function to have auto clicker self click 1x per 1 second.
    $("#speedup").on("click", function(){
        setInterval(function(){
        (button).trigger("click");
        console.log("i am going to add a click every second!");
        }, 1000);
    })

    // increment cost of autoClick button after each purchase.





    // increment cost of speedUp button after each purchase.


    
});