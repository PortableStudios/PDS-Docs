---
title: Resets
date: 2023-02-27
tags:
  -
eleventyNavigation:
  order: 3
---

{% unfurl "https://github.com/jensimmons/cssremedy" %}

### Explanation

#### Root

```css
html {
  block-size: 100%;
  font-size: max(1em, 20px);
  text-size-adjust: none;

  /* scrollbar-gutter: stable both-edges; */

  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
}
```

Viewport height

Larger root font size

Removed `scrollbar-gutter` until [this Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1318404#c2) is fixed

Smooth scrolling for users that don't prefer reduced motion

```css
body {
  background-color: var(--Canvas, Canvas);
  color: var(--CanvasText, CanvasText);
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-block-size: 100%;
}
```

System colours

System fonts

Viewport height

```css
::selection {
  background-color: var(--Highlight, Highlight);
  color: var(--HighlightText, HighlightText);
}
```

Selection colours

```css
[hidden] {
  display: none !important;
}
```

Hide `hidden` elements

#### A11y

```css
:focus-visible {
  outline: medium solid var(--Highlight, Highlight);
}
```

```css
[aria-pressed="true"] {
  border: medium solid;
}
```

```css
:is(
    summary,
    label[for],
    label:has(input),
    select,
    button,
    input:is([type="checkbox"], [type="file"], [type="radio"], [type="range"])
  ) {
  cursor: pointer;
}
```

```css
::-moz-range-thumb {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

/*
 * Had to duplicate the above code because we can't use `:is()`/`:where()` for a forgiving selector as they don't support pseudo elements
 * https://developer.mozilla.org/en-US/docs/Web/CSS/:is#forgiving_selector_parsing
 * https://developer.mozilla.org/en-US/docs/Web/CSS/:is#is_does_not_select_pseudo-elements
 */
::-webkit-slider-thumb {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}
```

```css
:is(
    input[disabled] ~ label[for],
    label[for]:has(~ input[disabled]),
    label:has(input[disabled]),
    [disabled]
  ) {
  cursor: not-allowed;
}
```

```css
[disabled] {
  color: var(--GrayText, GrayText);
}
```

#### Type

```css
h1,
h2,
h3,
h4,
h5,
h6,
p,
li {
  overflow-wrap: break-word;
  text-wrap: balance;
}
```

```css
a {
  color: var(--LinkText, LinkText);
  -webkit-tap-highlight-color: transparent;

  &:visited {
    color: var(--VisitedText, VisitedText);
  }

  &:active {
    color: var(--ActiveText, ActiveText);
  }
}
```

```css
mark {
  background-color: var(--Mark, Mark);
  color: var(--MarkText, MarkText);
}
```

#### Blocks

```css
* {
  margin: 0;
  padding: 0;
}
```

```css
table {
  border-collapse: collapse;
  width: 100%;
}
```

```css
th,
td {
  border: thin solid var(--CanvasText, CanvasText);
}
```

```css
pre {
  overflow: auto;
}

pre code {
  hyphens: none;
  tab-size: 4;
  white-space: pre;
}
```

```css
p:empty {
  display: none;
}
```

#### Forms

```css
button {
  background-color: var(--ButtonFace, ButtonFace);
  border-color: var(--ButtonBorder, ButtonBorder);
  color: var(--ButtonText, ButtonText);
  font: inherit;
}
```

```css
textarea {
  display: block;
  font: inherit;
  min-height: 6em;
  min-height: 6lh; /* Not yet well supported, so keeping in a fallback for now */
  resize: vertical;
  resize: block; /* Not yet well supported, so keeping in a fallback for now */
  width: 100%;
}
```

```css
fieldset {
  border: 0;
}
```

```css
input:not([type="checkbox"], [type="radio"]),
select {
  display: block;
  font: inherit;
  width: 100%;
}
```

```css
input:is([type="tel"], [type="text"]),
textarea,
select {
  background-color: var(--Field, Field);
  border: thin solid var(--FieldText, FieldText);
  color: var(--FieldText, FieldText);
}
```

```css
button,
input:not([type="checkbox"], [type="radio"], [type="file"], [type="range"]),
select,
textarea {
  border-style: solid;
}
```

```css
/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#putting_it_all_together */
input[type="range"][orient="vertical"] {
  appearance: slider-vertical;
  writing-mode: bt-lr;
}
```

```css
input:is([type="checkbox"], [type="radio"], [type="range"]),
progress {
  accent-color: var(--SelectedItem, SelectedItem);
}
```

```css
/*
 * Sets the label text for any of the following situations:
 * 1. `<label for></label><input id>`
 * 2. `<input id><label for></label>`
 * 3. `<label><input></label>`
 */
input:is([type="checkbox"], [type="radio"], [type="range"])[id] ~ label[for],
label:has(input:is([type="checkbox"], [type="radio"], [type="range"])),
label[for]:has(
    ~ input:is([type="checkbox"], [type="radio"], [type="range"])[id]
  ) {
  color: var(--SelectedItemText, SelectedItemText);
}
```

```css
::placeholder {
  color: var(--GrayText, GrayText);
}
```

```css
/*
 * This rule contains a lot of duplicate code from certain above rules because we can't use `:is()`/`:where()` for a forgiving selector as they don't support pseudo elements
 * https://developer.mozilla.org/en-US/docs/Web/CSS/:is#forgiving_selector_parsing
 * https://developer.mozilla.org/en-US/docs/Web/CSS/:is#is_does_not_select_pseudo-elements
 */
::file-selector-button {
  background-color: var(--ButtonFace, ButtonFace);
  border-color: var(--ButtonBorder, ButtonBorder);
  border-style: solid;
  color: var(--ButtonText, ButtonText);
  cursor: pointer;
  display: block;
  font: inherit;
  width: 100%;
}
```

#### Media

```css
img,
video,
audio,
iframe,
picture {
  aspect-ratio: auto var(--ratio);
  height: auto;
  max-width: 100%;
}
```

```css
video,
iframe {
  --ratio: 16 / 9;
}
```

```css
svg {
  fill: var(--fill, var(--svg, currentcolor));
  stroke: var(--stroke, var(--svg, currentcolor));
  stroke-width: 0;
}
```

```css
[data-icon] {
  display: inline-block;
}
```

### Example

<p class="codepen" data-height="1000" data-default-tab="result" data-slug-hash="rNZqQZK" data-user="ellyloel" style="height: 1000px; display: flex; align-items: center; justify-content: center; border: 2px solid; margin-block: 1em; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ellyloel/pen/rNZqQZK">
  PDS Styles CSS Reset</a> by Elly Loel (<a href="https://codepen.io/ellyloel">@ellyloel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
