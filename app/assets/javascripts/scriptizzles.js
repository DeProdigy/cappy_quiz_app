// Jabba Jive
$( document ).ready(function() {
  eventListeners();
});

function eventListeners() {
  $('button').on('click', function(e){
    var $h1Tag = $('h1');
    $h1Tag.text('Jabba Jive');
    $('body').addClass('pink');
    $(this).attr('disabled', 'true');
  });
}