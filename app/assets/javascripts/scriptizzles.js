// Jabba Jive
$( document ).ready(function() {
  eventListeners();
});

function eventListeners() {
  $('#click-me').on('click', function(e){
    var $h1Tag = $('h1');
    $h1Tag.text('Jabba Jive');
    $('body').addClass('pink');
    $(this).attr('disabled', 'true');
  });

  $('#calc').on('click', function(){

    var inputField = $('#numbers').val();
    var seperatedInputs = inputField.split(',');
    for(var i = 0; i < seperatedInputs.length; i++) {
      //check if there is one more number
      if(isNaN(parseInt(seperatedInputs[i+1]))){
        break;
      } else {
          if(parseInt(seperatedInputs[i]) < parseInt(seperatedInputs[i+1])){
            $('body').addClass('green');
          } else {
            $('body').addClass('red');
          }
      }
    }
  });
}