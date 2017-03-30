
$(document).ready(function() {


  $("#submit").click(function(e){
    $("#aboutPokemon").show();
  var value = $("#pokeField").val();
  console.log(value);
  e.preventDefault();
 var myurl= "http://pokeapi.co/api/v2/pokemon/";
  myurl += value;
  myurl += '/';
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(parsed_json) {
      var name = parsed_json['name'];
      var height = parsed_json['height'];
      var weight = parsed_json['weight'];
      everything = "<ul style=\"list-style:none;\">";
      everything += name;
      everything += "<li>Height: "+height;
      everything += "<li>Weight: "+weight;
      everything += "</ul>";
      $("#aboutPokemon").html(everything);
    }
  });

})
})
