$(document).ready(() => {
    let pinput = [];
    let litpins = {};
    $(".pin-button").click(function() {
        console.log(pinput.length);
        console.log(litpins.length);
        if (litpins.length === 6) {
            $(".pin-dots-box").addClass("reject");
            setTimeout(function(){ $(".pin-dots-box").removeClass("reject"); }, 500);
            litpins.removeClass("filled");
            litpins = {};
            pinput = [];
            return;
        }
        pinput.push($(this).text().replace(/\s+/g, ''))
        litpins = $(".pin-dot").slice(0,pinput.length);
        console.log(litpins);
        litpins.addClass("filled");
    })

    $(".login-button").click(function() {
        if (pinput.join("").replace(/\s+/g, '') === "123456") {
            alert("Correct!");
        } else {
            console.log(pinput.join("").replace(/\s+/g, ''));
            $(".pin-dots-box").addClass("reject");
            setTimeout(function(){ $(".pin-dots-box").removeClass("reject"); }, 500);
        }
        litpins.removeClass("filled");
        litpins = {};
        pinput = [];
        return;
    })

    $(".back-button").click(function() {
        let removedPin = pinput.length - 1;
        litpins.removeClass("filled");
        pinput = pinput.slice(0, removedPin);
        litpins = $(".pin-dot").slice(0,pinput.length); 
        litpins.addClass("filled");
        console.log(pinput.length);
        console.log(litpins.length);
    })
})