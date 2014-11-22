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

// load polymer elements only on larger screens - size set in head.html

(function(){
  var queries = document.
                querySelectorAll('.mediaquerydependent'),
      all = queries.length,
      cur = null,
      attr = null;
  while (all--) {
    cur = queries[all];
    if (cur.dataset.media &&
        window.matchMedia(cur.dataset.media).matches) {
      for (attr in cur.dataset) {
        if (attr !== 'media') {
          cur.setAttribute(attr, cur.dataset[attr]);
        }
      }
    }
  }
}());