loren_alt = false;
joint_alt = false;
sidney_alt = false;

alert_dev = function () {
    swal("Not quite yet!", "Parlay is currently under development.", "warning");
};

window.onload = function() {

    var links = document.querySelectorAll('.download-links > a');
    if(links.length === 0)
	return;

    links[0].onclick = alert_dev;
    links[1].onclick = alert_dev;

};

document.addEventListener("DOMContentLoaded", function(event) { 

    // emojify.setConfig({"only_crawl_id": "landing"});
    // emojify.run();

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


    var names = ['loren','sidney','joint'];
    names.forEach( function(name) {
        var img = $('#' + name);
        img.mouseenter( function() {
            img.attr('src', "/images/" + name + "_alt.gif");
        }).mouseleave( function() {
            img.attr('src', "/images/" + name + ".jpg");
        });
        img.click( function() {
            alt = name + '_alt';
            if (window[alt])
                img.attr('src', "/images/" + name + ".jpg");
            else
                img.attr('src', "/images/" + name + "_alt.gif");
            window[alt] = !window[alt];
        });
    });
                   

});


