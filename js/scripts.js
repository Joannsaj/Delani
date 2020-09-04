$(document).ready(function () {
    $(".cliick1").click(function () {
        $(".cliick1").hide();
        $(".click1").show();
    });
    $(".cliick2").click(function () {
        $(".cliick2").hide();
        $(".click2").show();
    });
    $(".cliick3").click(function () {
        $(".cliick3").hide();
        $(".click3").show();
    });
    $(".click1").click(function () {
        $(".click1").hide();
        $(".cliick1").show();
    });
    $(".click2").click(function () {
        $(".click2").hide();
        $(".cliick2").show();
    });
    $(".click3").click(function () {
        $(".click3").hide();
        $(".cliick3").show();
    });


    $("#img1").hover(function () {
        $(".hover1").toggle();
    });
    $("#img2").hover(function () {
        $(".hover2").toggle();
    });
    $("#img3").hover(function () {
        $(".hover3").toggle();
    });
    $("#img4").hover(function () {
        $(".hover4").toggle();
    });
    $("#img5").hover(function () {
        $(".hover5").toggle();
    });
    $("#img6").hover(function () {
        $(".hover6").toggle();
    });
    $("#img7").hover(function () {
        $(".hover7").toggle();
    });
    $("#img8").hover(function () {
        $(".hover8").toggle();
    });
});

function getInfo() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var comment = document.getElementsByName("comment").value

    if (name) {
        alert(name + "," + "we have received your message.Thank you for reaching out to us.");
    } else {

    }
}
