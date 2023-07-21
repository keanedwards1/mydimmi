window.addEventListener('load', function() {
    var elementsToHide = document.querySelectorAll('.hide-on-load');
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].classList.add('hide-on-load');
    }
  });