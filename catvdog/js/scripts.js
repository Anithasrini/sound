$(document).ready(function() {
  $("#cat_section img").click(function() {
    $("#cat_section ul").append("<li>Meow!</li>");
    $("#dog_section ul").append("<li>Woof-Woof!</li>");

    var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://www.joshuawise.com/~joshua/meoww.wav');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.Play();
        }, true);



  });

  $("#dog_section img").click(function() {
    $("#dog_section ul").append("<li>Woof!</li>");
    $("#cat_section ul").append("<li>Meow-Meow!</li>");

    var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://www.lettersnstuff.com/sounds/animals/bark1.wav');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.Play();
        }, true);

        


  });
});
