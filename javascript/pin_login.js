$(document).ready(() => {
    let pinput = [];
    let litpins = {};
    $("a").click(function() {
        pinput.push($(this).text())
        litpins = $(".pin-dot").slice(0,pinput.length);
        litpins.addClass("filled");
        if (litpins.length === 6) {
            litpins.removeClass("filled");
            litpins = {};
            pinput = [];
        }
    })
})