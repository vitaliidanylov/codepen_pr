var main = function() {
  var $tags;
  var inuse = false;

  $("#button").click(function() {
    $tags = $("#input").val();
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
      "tags=" + $tags + "&format=json&jsoncallback=?";
    var i = 0;
    var links = [];

    $.getJSON(url, function(flickrResponse) {
      flickrResponse.items.forEach(function(photo) {
        links.push(photo.media.m);
      });
      if (!inuse) {
        inuse = true;
        var a = setInterval(function() {
          if (i === links.length) {
            alert("The end!");
            inuse = false;
            clearInterval(a);
            i++;
          }

          $('#image').css("background-image", "url('" + links[i] + "')");
          $("#image").fadeIn("slow");
          i++;
        }, 4000);
      }
    });

  });
};

$(document).ready(main);
//извлекать изображение и с интервалом пердолить его в оласть для изображения, проверить адрес JSON
//

/*$.getJSON(url, function(frickrResponse) {
      frickrResponse.items.forEach(function(photo) {
        links.push(photo.media.m);
        $('#image').css("background-image", "url('" + links[5] + "')");
      });
    });
  }).done(function() {
    if(!inuse){
      inuse = true;
      var a = setInterval(function() {
      if(i === links.length){
        clearInterval(a);
        inuse = false;
      }
      $('#image').css("background-image", "url('" + links[i] + "')");
      i++;  
    }, 1000);  
    }*/