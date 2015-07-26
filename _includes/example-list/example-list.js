var expandLink = document.getElementById('expand-link');
var examples = document.getElementById('example-list');
var events = ['click', 'touchend'];

for(event of events){

  expandLink.addEventListener(event, function(){
    examples.classList.toggle('expanded');
    if (examples.classList == 'expanded') {;
      expandLink.innerHTML = "Collapse examples";
    }else{
      expandLink.innerHTML = "Show more examples";
    }
console.log('exfired');

  }, false);

}

// window.addEventListener('touchend', function(){
//   console.log('touched')
// },false)