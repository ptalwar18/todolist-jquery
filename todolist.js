var input = $("input[type='text']");
var ul = $("ul");
var iconPlus = $(".icon-plus");


//whatever we add to the input , we display it. 
input.on("keypress", function (event) {
    if (event.which == 13) {
        if ($(this).val()) {
            ul.append("<li class='item'><i class='icon-trash fa fa-trash-o'></i>" + $(this).val() + "</li>");
        }
        $(this).val("");
    }
    $(".item").click(function () {
        this.classList.toggle("strike");
    });
    $(".item").mouseover(function () {
        $(this).children().fadeIn(600);
    });
    $(".item").mouseleave(function () {
        $(this).children().fadeOut(600);
    });
    $(".icon-trash").click(function () {
        $(this).parent().remove();
    })

});


//clicking on the plus sign fades out the input
iconPlus.click(function () {
    input.fadeToggle(500, function () {
        //$(this).remove();
    })
})