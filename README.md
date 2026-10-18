# muskanhashim.github.io

A personal site: some essays, some fragments, and a room of photographs.
Plain HTML and CSS, no framework, no build step. GitHub Pages serves the files exactly as they sit here.

## Layout

```
index.html          the front page
blog/
  index.html        the index: a word cloud, a tile grid, and a record of what you have read
  post.css          every piece is set from this one stylesheet
  art.svg           the drawings, as <symbol>s, referenced with <use>
  *.html            one file per piece
photos/
  index.html        the gallery
  img/              32 photographs, WebP
```

## How a piece is set

Each piece is one HTML file. The `<body>` carries a class that says what kind of thing it is, and `post.css` does the rest:

| class | for |
| --- | --- |
| `essay` | the default: prose |
| `book` | the longer essays — first-line indents, no gaps, set like print |
| `fragments` | short thoughts, each with air around it |
| `letter` | written to someone: narrower column, slower leading |
| `scatter` | notes with nothing to do with each other |
| `single` | one sentence, one word per line |
| `terminal` | monospace, used once, on the piece that argues with a machine |
| `dedication` | the piece that opens with one |
| `stack` | where a piece repeats itself, each refrain starts its own line |

Inside a piece:

- `.folio` — the number the index gives it, hanging in the margin
- `.versal` — the opening word, alone on its line
- `.beat` — the line that lands, larger, hanging into the margin
- `.hush` — the line said under the breath, smaller and grey
- `.egg` — a few words lit faint pink, so that read alone they say something else
- `.drawing` — a drawing floated into the column, with `shape-outside` traced from its own path data

Which paragraph gets which is decided by reading the piece, not by counting its words. Most pieces have one of each at most. Several have neither.

## Adding a piece

1. Copy an existing file in `blog/` and replace the text.
2. Give it the next number in `POSTS` in `blog/index.html` — numbers are permanent and run oldest first.
3. Set the `<body>` class to whichever kind of thing it is.
4. Leave it alone unless the writing asks for something.

## The drawings

Original, drawn as SVG paths, no tracing of anyone else's work. They inherit `currentColor`, so the same drawing is grey on one page and pink on another. `blog/art.svg` holds them all; pieces reference them with `<use href="art.svg#name">`.

## Colours

Ink `#111111`, grey `#999999`, pink `#e0218a`, faint pink `#e98cb8`, one red `#b3261e`. Georgia throughout, monospace on exactly one piece.

## Licence

The code is free to take. The writing and the photographs are not — they are mine.
