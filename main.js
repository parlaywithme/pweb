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

document.addEventListener("DOMContentLoaded", function(event) { 

    emojify.run();

    window.drawer = document.querySelector('core-drawer-panel');

    if(window.screen.width > 640) {
	drawer && drawer.setAttribute('drawerWidth','100%');
    }

    // so it doesn't run at pageload
    setTimeout( function() {
	window.addEventListener('core-responsive-change', function(e) {
    	    if (e.detail.narrow) {
		drawer && drawer.setAttribute('drawerWidth', '256px');
	    }
	    else {
		drawer && drawer.setAttribute('drawerWidth','100%');
	    }
	});
    }, 1000);

});


emojify.setConfig({"img_dir": "bower_components/emojify.js/images/emoji"});
