$(".task").click(function() {
    $(this).attr("toggled") === "true" ? $(this).attr("toggled", "false") : $(this).attr("toggled", "true");
});