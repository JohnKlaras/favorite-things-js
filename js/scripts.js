$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var animalInput = $("input#animal").val();
    var aRhyme = $("input#aRhyme").val();
    var treat = $("input#treat").val();
    var tRhyme = $("input#tRhyme").val();
    var color = $("input#color").val();
    var clothing = $("input#clothing").val();
    var feature = $("input#feature").val();
    var noun = $("input#noun").val();
    var verb = $("input#verb").val();

    $(".name").text(nameInput);
    $(".animal").text(animalInput);
    $(".aRhyme").text(aRhymeInput);
    $(".treat").text(treatInput);
    $(".tRhyme").text(tRhymeInput);
    $(".color").text(colorInput);
    $(".clothing").text(clothingInput);
    $(".feature").text(featureInput);
    $(".noun").text(nounInput);
    $(".verb").text(verbInput);

    $("#song").show();

    event.preventDefault();

  });
});
