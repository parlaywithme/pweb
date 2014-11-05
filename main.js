alert_dev = function () {
    swal("Not quite yet!", "Parlay is currently under development.", "warning");
};

window.onload = function() {
    links = document.querySelectorAll('.download-links > a');
    if(links.length === 0)
	return;

    links[0].onclick = alert_dev;
    links[1].onclick = alert_dev;
};