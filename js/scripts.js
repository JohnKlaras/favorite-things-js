$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var animalInput = $("input#animal").val();
    var aRhymeInput = $("input#aRhyme").val();
    var treatInput = $("input#treat").val();
    var tRhymeInput = $("input#tRhyme").val();
    var colorInput = $("input#color").val();
    var clothingInput = $("input#clothing").val();
    var featureInput = $("input#feature").val();
    var nounInput = $("input#noun").val();
    var verbInput = $("input#verb").val();

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
    $("#list").hide();

    event.preventDefault();
  });

});
