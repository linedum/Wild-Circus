$(document).ready(function () {

  var menu = $('#menu'),
    boxes = $('#content'),
    body = $('body');
  
  body.removeClass('no-js');  
  
  function show(event, box, activeItem, isActiveItem) {
    event.preventDefault();
    box.toggleClass('show');
    
    if (activeItem !== undefined && !isActiveItem) {
      activeItem.removeClass('show');
    }
  }
  
  function showSection(event) {
    var that = $(this),
      activeItem = boxes.find('.show'),
      parent = that.closest('ul'),
      isActiveItem,
      targetURL = "",
      targetBox = that;
    
    
    if (parent.attr('id') === 'menu') {
      targetURL = that.attr('href');
      targetBox = $(targetURL);
      
      isActiveItem = $(targetURL).hasClass('show');

    } else if (parent.attr('id') === 'content') {
      isActiveItem = that.hasClass('show');
      
    }
    
    show(event, targetBox, activeItem, isActiveItem);
  }

  boxes.on("click", "li", showSection);
  menu.on("click", "li a", showSection);
  
});
