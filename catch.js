
$(document).ready(function() {


  $(".box").click(function(e){
  var value = Math.floor((Math.random() * 721) + 1);
  console.log(value);
  e.preventDefault();
 num = value;
 var myurl= "http://pokeapi.co/api/v2/pokemon/";
  myurl += value;
  myurl += '/';
  urlA = myurl;
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(parsed_json) {
      var name = parsed_json['name'];
      var height = parsed_json['height'];
      var weight = parsed_json['weight'];
      everything = "<ul style=\"list-style:none;\">";
      everything += "YOU CAUGHT A "+name+"!!";
    //  everything += "<li>Height: "+height;
    //  everything += "<li>Weight: "+weight;
      everything += "</ul>";
     // everything += "<a id=\"learn\" href=\"./learn.html\">Learn more about "+ name + "?</a>";
      $("#pokemon").html(everything);
    }
  });
})
})

