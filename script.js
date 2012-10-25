$(function(){
  var card = $('.card');
  function _el(selector) { return card.find(selector); }

  function swap_classes(current_class, next_class) {
    var current = _el('.' + current_class).get(0),
        next = _el('.' + next_class).get(0);

    var temp = current.className;
    current.className = next.className;
    next.className = temp;
  }

  _el(".flip").on("click",function(){
    _el('.tmp').html(_el('.current').html())
    swap_classes('active', 'inactive')

    var current = _el('.current'),
        next = _el('.next')

    current.flippy({
      content: _el('.tmp'),
      direction:'TOP',
      duration:'190',
      onStart:function(){
        current.removeClass('shadow')
      },
      onFinish:function(){
        current.addClass('shadow')
        swap_classes('current', 'next')
        _el('.next').html(_el('.tmp').html())
        _el('.tmp').html(_el('.current').html())
      }
    });
  });
})