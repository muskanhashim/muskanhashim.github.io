// The thread down the left margin fills as the piece is read.
// Anyone who has asked not to see motion gets no thread at all.
(function () {
  var thread = document.querySelector('.thread');
  if (!thread || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function draw() {
    var scrollable = document.body.scrollHeight - innerHeight;
    var read = scrollable > 0 ? Math.min(1, scrollY / scrollable) : 0;
    thread.style.height = read * innerHeight + 'px';
  }

  addEventListener('scroll', draw, { passive: true });
  addEventListener('resize', draw);
  draw();
})();
