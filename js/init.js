document.addEventListener('DOMContentLoaded', () => {
    
  // Navegation Menu
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // Slider
  var elems = document.querySelectorAll('.slider');
   var instances = M.Slider.init(elems, {
      indicators: false,
      height: 500,
      duration: 500,
      interval:4000
   });

});







document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.parallax').parallax();
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});
  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
        

