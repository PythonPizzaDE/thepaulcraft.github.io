$(document).ready(function () {
    let button_clicked = false;
    $("#test").click(function () {
       $(this).animate({
           marginLeft: "+=100px",
       });
        $(this).animate({
            marginLeft: "-=100px",
        });
    });

    $("#button1").click(function () {
        $("#test").toggle()
        if(!button_clicked) {
            button_clicked = true
            $("#button2").animate({
                marginLeft: "65%"
            });
            document.getElementById("button2").style.backgroundColor = "red"
        } else {
            button_clicked = false
            $("#button2").animate({
                marginLeft: "5%"
            });
            document.getElementById("button2").style.backgroundColor = "#31ff31"
        }
    });

    $("#test").hover(function () {
        $(this).animate({
            fontSize: "+=1em"
        });
    }, function () {
        $(this).animate({
            fontSize: "-=1em"
        })
    })
});