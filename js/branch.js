$(document).ready(function() {
  $('form#info').submit(function(event) {
    event.preventDefault();
    const age = parseInt($('input#age').val());
    const name = $('input#name').val();

    $('.name').text(name);

    if (age >= 21) {
      $('#menu-adult').show();
      $('#menu-kid').hide();
    } else {
      $('#menu-kid').show();
      $('#menu-adult').hide();
    }
  })

})