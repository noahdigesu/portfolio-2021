$(".project").click(function () {
	toggleProjectsOff(this);
	toggleProjectOn(this);
});

const toggleProjectsOff = () => {
	$(".project").each(function () {
		$(this).attr("toggled", "false");
		$(this).find("a").css("pointer-events", "none");
		$(this).find("h4").html("&nbsp;");
		$(this).find("p").html("&nbsp;");
	});
};

const toggleProjectOn = (project) => {
	$(project).find("a").css("pointer-events", "inherit");
	$(project).attr("toggled") === "true"
		? $(project).attr("toggled", "false")
		: $(project).attr("toggled", "true");

	setProjectText(project);
};

const setProjectText = (project) => {
	let projectName =
		$(project).attr("id").charAt(0).toUpperCase() +
		$(project).attr("id").slice(1);
	projectName = projectName.replaceAll("-", " ");

	let year = projectName.match(/\d+/g).map(Number);
	projectName = projectName
		.replace(/\d+/g, "")
		.slice(0, projectName.length - 1);

	$(project).find("h4").text(projectName);
	$(project).find("p").text(year);
};
