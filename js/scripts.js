$(document).ready(function(){
  $("#mainForm").submit(function(event){

    var userColor = $("input:radio[name=color]:checked").val();
    var userSound = $("input:radio[name=sound]:checked").val();
    var userCars = $("input:radio[name=cars]:checked").val();
    var userMusic = $("input:radio[name=music]:checked").val();
    var result = userColor + " " + userSound + " " + userCars;
    console.log(result);
    //$("#output").text(result).show();
    //$(".hidden").text(result).show();

    $("#color1").empty().append(userColor);
    $("#sounds1").empty().append(userSound);
    $("#cars1").empty().append(userCars);
    $("#music1").empty().append(userMusic);
    $("#output").show();

    console.log(" USER ENTERED: "+ userColor + " USER ENTERED: " + userSound + " USER ENTERED: " + userCars);
    event.preventDefault();
  });

});
