$(document).ready(function(){
  $('#get_color').click(function(){
    $.post('/color', function(response){
      console.log(response)
      $('#color_me li:nth-child(' + response.cell+ ')').css("background-color", response.color)
    })
 })
});