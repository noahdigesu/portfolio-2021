/**
 * Changes window ordering.
 */
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

/**
 * Closes a window.
 */
$(".close").click(function () {
	$(this)
		.parent()
		.parent()
		.addClass("animate__animated animate__zoomOut animate__fast")
		.delay(400)
		.queue(function () {
			$(this).remove();
		});

	console.log($(".windows").children().length <= 1);
	if ($(".windows").children().length <= 1) {
		$(".windows").append(
			"<button id='refresh' class='glassmorphism'><img src='../../images/icons/refresh.svg' /></button>"
		);
	}
});

/**
 * Minimizes a window.
 */
$(".minimize").click(function () {
	$(this)
		.parent()
		.parent()
		.addClass("animate__animated animate__zoomOutDown animate__faster");
	addToDash($(this).parent().parent());
});

/**
 * Adds the corresponding window icon to the dash and close the current window.
 * @param {*} window
 */
const addToDash = (window) => {
	$(".dash").attr("toggled", "true");

	let windowId = window.attr("id");
	setTimeout(function () {
		$(".dash").append(
			`<span id='${windowId}' class='icon animate__animated animate__fadeInUp animate__faster'>` +
				`<img src='../../images/icons/${windowId}.svg' alt='icon'/>` +
				"</span>"
		);
	}, 300);
};

/**
 * Removes the current icon and opens the corresponding window back up.
 */
$(".dash").on("click", ".icon", function () {
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
			$(".dash").attr("toggled", "false");
		}, 200);
	}
});

/**
 * Refreshes the page.
 */
$(".windows").on("click", "#refresh", function () {
	$("#refresh").removeClass("rotateIn");
	$("#refresh").addClass("rotate");
	setTimeout(function () {
		location.reload();
	}, 400);
});
