//TODO: Convert to coffee (:

$(function(){
  $("body").on("click", "a.flip.next", function(){
      $(".info").flippy({
        content: $(".info").html(),
        direction:'TOP',
        duration:'300',
        onStart: function(){
          $(".info").removeClass('shadow');
        },
        onFinish: function(){
          $(".flip").toggleClass("next");
          $(".info").toggleClass("flipped");
          $(".info").addClass('shadow');
        }
      });
  });
})