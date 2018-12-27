'use strict';
$(document).ready(function() {
    let clicks = 0;
    let autoCost = 10; 
    let speedCost = 100; 
    let superCost = 300;
    var button = $("#click");
    let total = 0;
    // let autoClick;


    //need to set up
    let autoClicks = 0; //automatically click once per second, updates total.
    let speedTime = 0; //speeds up the time for auto clicks, updates total.
    let superClicks = 0; // automatically clicks 2 x per second, or once every half second!

    // User-Click-Increase Total.
    $("#click").on("click", function(){
        clicks = clicks + 1;
        total = clicks;
        $("#clickCount").html(clicks);
    })
    // Auto Click Purchased = subtract cost from total!
    // increment cost of autoClick button after each purchase.
    $("#auto").on("click", function(){
        if (clicks >= autoCost){
            console.log("clicks = " +clicks);
            console.log("autocost = " +autoCost);
            clicks = clicks - autoCost;
            $("#clickCount").html(clicks);
            (autoCost = (autoCost + 15));
            $("#auto").text("Buy for " + (autoCost));
            console.log("I am going to add 15 to the cost of Auto Click");
            setInterval(function(){
            (button).trigger("click");
            console.log("i am going to add a click every 5 seconds!");
            }, 5000);
        }
    })
    // Speed Up Purchased = subtract cost from total!
    // increment cost of speedup button after each purchase.
    $("#speed").on("click", function(){
        if (clicks >= speedCost){
            console.log("clicks = " +clicks);
            console.log("speedCost = " +speedCost);
            clicks = clicks - speedCost;
            $("#clickCount").html(clicks);
            (speedCost = (speedCost + 150));
            $("#speed").text("Buy for " + (speedCost));
            console.log("I am going to add 150 to the cost of Speed Click");
            setInterval(function(){
            (button).trigger("click");
            console.log("i am going to add a click every second!");
            }, 1000);
        }
    })

    // SuperDuper Purchased = subtract cost from total!
    // Increment cost of superduper button after each purchase.
    $("#duper").on("click", function(){
        if (clicks >= superCost){
            console.log("clicks = " +clicks);
            console.log("superCost = " +superCost);
            clicks = clicks - superCost;
            $("#clickCount").html(clicks);
            (superCost = (superCost + 200));
            $("#duper").text("Buy for " + (superCost));
            console.log("I am going to add 200 to the cost of Speed Click");
            setInterval(function(){
            (button).trigger("click");
            console.log("i am going to add a click every half second!");
            }, 500);
        }
    })
    
});

// finished!