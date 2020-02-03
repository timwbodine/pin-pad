$(document).ready(() => {
    let pinput = [];
    let litpins = {};
    $(".pin-button").click(function() {
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
        litpins.addClass("filled");
    })

    $(".login-button").click(function() {
        if (pinput.join("") === "123456") {
            alert("Correct!");
        } else {
            $(".pin-dots-box").addClass("reject");
            setTimeout(function(){ $(".pin-dots-box").removeClass("reject"); }, 500);
        }
        litpins.removeClass("filled");
        litpins = {};
        pinput = [];
        return;
    })

    $(".back-button").click(function() {
        litpins.removeClass("filled");
        pinput.pop();
        litpins = $(".pin-dot").slice(0,pinput.length); 
        litpins.addClass("filled");
    })
})