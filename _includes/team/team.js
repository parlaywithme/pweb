//
var alternateImage = (function(){

  var _altImage = function(name) {
    $('#' + name).on('mouseenter', function(e){
      return $(e.target).attr('src', "/images/" + name + "_alt.gif");
    }).on('mouseleave', function(e){
      return $(e.target).attr('src', "/images/" + name + ".jpg");
    });
  };

  return {
    gif: _altImage
  }

})();



names = ['joint', 'sidney', 'loren'];

for(name in names){
  alternateImage.gif(names[name]);

}