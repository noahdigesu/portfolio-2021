$(".window").mousedown(function () {
    let highestIndex = 0, zIndex = 0;
    $(".window").each(function () {
        $(this).attr("toggled", "false");

        zIndex = parseInt($(this).css("z-index"));
        if (zIndex > highestIndex) highestIndex = zIndex;
    });
    $(this).attr("toggled", "true");
    $(this).css("z-index", highestIndex + 1);
});

$(".close").click(function(){
    $(this).parent().parent()
        .addClass("animate__animated animate__zoomOut animate__fast")
        .delay(400).queue(function(){
            $(this).remove();
        });
    
});

$(".minimize").click(function(){
    $(this).parent().parent().addClass("animate__animated animate__zoomOutDown animate__faster");
    /* setTimeout(function() {
        $(this).parent().parent().css("display", "none");
    }, 500); */
});