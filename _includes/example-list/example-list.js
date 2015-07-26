var expandLink = document.getElementById('expand-link');
var examples = document.getElementById('example-list');

expandLink.addEventListener('click', function(){
  examples.classList.toggle('expanded');
  if (examples.classList == 'expanded') {;
    expandLink.innerHTML = "Collapse examples";
  }else{
    expandLink.innerHTML = "Show more examples";
  }
}, false);