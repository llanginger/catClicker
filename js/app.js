$(document).ready(function(){
  var cat1counter = 0;
  var cat2counter = 0;
  $('#cat1').click(function(e) {
    cat1counter++;
    $(".cat1Counter").text("Click Number: " + cat1counter);
  });

  $('#cat2').click(function(e) {
    cat2counter++;
    $(".cat2Counter").text("Click Number: " + cat2counter);
  });

  var cat1 = $("<p>Catimus the first.</p>");
  var cat2 = $("<p>Catmageddon the second.</p>");

  $("<div class='catNames'></div>").prependTo(".imageBox");


  $(".catNames").append(cat1);
  $(".catNames").append(cat2);
});
