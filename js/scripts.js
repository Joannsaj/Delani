$(document).ready(function () {
    $("#click1").click(function () {
        $(".click1").toggle();
    });
    $("#click2").click(function () {
        $(".click2").toggle();
    });
    $("#click3").click(function () {
        $(".click3").toggle();
    });

    $("#img1").hover(function () {
        $(".hover1").toggle();
    })
});