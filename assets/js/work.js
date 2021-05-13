$('.project').click(function() {
    $('.project').each(function(){
        $(this).attr("toggled", "false");
        $(this).find("a").css("pointer-events", "none");
        $(this).find("h4").html("&nbsp;");
        $(this).find("p").html("&nbsp;");
    });

    $(this).find("a").css("pointer-events", "inherit");
    $(this).attr("toggled") === "true" ? $(this).attr("toggled", "false") : $(this).attr("toggled", "true");
    let projectName = $(this).attr("id")
        .charAt(0).toUpperCase()
        + $(this).attr("id").slice(1);
    projectName = projectName.replaceAll("-", " ");
    let year = projectName.match(/\d+/g).map(Number);
    projectName = projectName.replace(/\d+/g, "").slice(0, projectName.length - 1);
    $(this).find("h4").text(projectName);
    $(this).find("p").text(year);
});