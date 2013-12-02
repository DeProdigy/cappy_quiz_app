// Jabba Jive
$( document ).ready(function() {
  eventListeners();
});

function eventListeners() {
  $('button').on('click', function(){
    var $h1Tag = $('h1');
    $h1Tag.text('Jabba Jive');
  });
}