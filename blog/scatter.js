// random stuff is a board of notes, not a sequence. Their order, size,
// measure and placement are drawn on every visit, so no note is ever the
// one at the top. Only the memory at the foot stays put.
(function () {
  var art = document.querySelector("article");
  var notes = Array.prototype.slice.call(art.querySelectorAll("p.note"));
  var keeper = notes.pop();                       // the memory always lands last

  // group the two "is a choice" notes so the echo survives the shuffle
  var blocks = [], i = 0;
  while (i < notes.length) {
    if (notes[i].dataset.pair && notes[i + 1] && notes[i + 1].dataset.pair === notes[i].dataset.pair) {
      blocks.push([notes[i], notes[i + 1]]); i += 2;
    } else { blocks.push([notes[i]]); i += 1; }
  }
  for (var j = blocks.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1)), t = blocks[j]; blocks[j] = blocks[k]; blocks[k] = t;
  }

  function dress(p) {
    var n = p.textContent.trim().split(/\s+/).length;
    // a short note can be shouted, a long one cannot
    var band = n <= 7 ? [30, 38, 46] : n <= 14 ? [23, 27, 33] : [18, 20, 24];
    p.style.fontSize = band[Math.floor(Math.random() * band.length)] + "px";
    p.style.maxWidth = (26 + Math.random() * 18).toFixed(0) + "ch";
    // a note is pinned to the left, the middle or the right of the board --
    // three places, not a random nudge, so the page composes instead of drifts
    var place = ["left", "middle", "right"][Math.floor(Math.random() * 3)];
    p.classList.add("at-" + place);
    // and it was put down by hand, so it is never quite straight
    p.style.transform = "rotate(" + (Math.random() * 1.5 - 0.75).toFixed(2) + "deg)";
  }

  blocks.forEach(function (b) { b.forEach(function (p) { dress(p); art.appendChild(p); }); });
  art.appendChild(keeper);
})();
