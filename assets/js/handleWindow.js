$(".window").mousedown(function () {
	let highestIndex = 0,
		zIndex = 0;
	$(".window").each(function () {
		$(this).attr("toggled", "false");

		zIndex = parseInt($(this).css("z-index"));
		if (zIndex > highestIndex) highestIndex = zIndex;
	});
	$(this).attr("toggled", "true");
	$(this).css("z-index", highestIndex + 1);
});

$(".close").click(function () {
	$(this)
		.parent()
		.parent()
		.addClass("animate__animated animate__zoomOut animate__fast")
		.delay(400)
		.queue(function () {
			$(this).remove();
		});
});

$(".minimize").click(function () {
	$(this)
		.parent()
		.parent()
		.addClass("animate__animated animate__zoomOutDown animate__faster");
	addToBottomBar($(this).parent().parent());
});

const addToBottomBar = (window) => {
	$(".bottom-bar").attr("toggled", "true");

	let windowId = window.attr("id");
	setTimeout(function () {
		$(".bottom-bar").append(
			`<span id='${windowId}' class='icon animate__animated animate__fadeInUp animate__faster'>` +
				`<img src='../../images/icons/${windowId}.svg' alt='icon'/>` +
				"</span>"
		);
	}, 300);
};

$(".bottom-bar").on("click", ".icon", function () {
	$(`.window#${this.id}`).removeClass("animate__zoomOutDown");
	$(`.window#${this.id}`).addClass("animate__zoomInUp");

	$(this).removeClass("animate__fadeInUp");
	$(this).addClass("animate__fadeOutDown");

	$(this)
		.delay(400)
		.queue(function () {
			$(this).remove();
		});

	if ($(this).parent().children().length === 1) {
		setTimeout(function () {
			$(".bottom-bar").attr("toggled", "false");
		}, 200);
	}
});
