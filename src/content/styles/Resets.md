---
title: Resets
date: 2023-02-27
tags:
  -
eleventyNavigation:
  order: 3
---

## Explanation

### External stylesheets

{% unfurl "https://github.com/jensimmons/cssremedy" %}

### Root

```css
@keyframes smoothscroll1 {
	from,
	to {
		scroll-behavior: smooth;
	}
}

@keyframes smoothscroll2 {
	from,
	to {
		scroll-behavior: smooth;
	}
}

html {
	animation: smoothscroll1 1s;
	block-size: 100%;
	font-size: max(1em, 20px);
	text-size-adjust: none;

	/* scrollbar-gutter: stable both-edges; */

	&:focus-within {
		@media (prefers-reduced-motion: no-preference) {
			animation-name: smoothscroll2;
			scroll-behavior: smooth;
		}
	}
}
```

If the user is okay with motion smooth scrolling it set.

The animations [disable smooth scrolling when searching the page](https://schepp.dev/posts/smooth-scrolling-and-page-search/). This ensures that user's are able to hop around the search results on the page without being slowed down by scrolling animations.

It’s useful for the `<html>` element to fill the viewport, even when empty.

Larger more accessible root font size, if the user's default font size is less than `20px` then the root font size will be `20px` but if the user's font size is bigger than that then the root font size will match their font size value.

Removed `scrollbar-gutter` until [this Chromium bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1318404#c2) is fixed. When fixed we'll be able to wave goodbye to layout shift when opening modals.

```css
body {
	background-color: var(--Canvas, Canvas);
	color: var(--CanvasText, CanvasText);
	font-family: system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
		"Segoe UI Symbol", "Noto Color Emoji";
	min-block-size: 100%;
}
```

We're using system colours, see the colours section on the [[tokens|tokens page]] for more details.

System font stack

[Modern font stacks](https://modernfontstacks.com/)

::: details Screenshots
[Color Emoji Font Stack](https://codepen.io/client9/pen/qoJoZW)

{% figure "Android" %}
{% markdown %}
![Android](./src/assets/img/Android.jpeg)
{% endmarkdown %}
{% endfigure %}

{% figure "iOS" %}
{% markdown %}
![iOS](./src/assets/img/iOS.jpeg)
{% endmarkdown %}
{% endfigure %}

{% figure "MacOS" %}
{% markdown %}
![MacOS](./src/assets/img/MacOS.png)
{% endmarkdown %}
{% endfigure %}

{% figure "PopOS" %}
{% markdown %}
![PopOS](./src/assets/img/PopOS.png)
{% endmarkdown %}
{% endfigure %}

{% figure "Windows" %}
{% markdown %}
![Windows](./src/assets/img/Windows.png)
{% endmarkdown %}
{% endfigure %}
:::

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

### A11y

```css
:focus-visible {
	outline: medium solid var(--Highlight, Highlight);
}
```

Clearer focus styles

```css
[aria-pressed="true"] {
	border: medium solid;
}
```

Not 100% sold on this one, but I do like the idea of indicating `aria-pressed` by default.

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

Pointer cursor on elements that are interactive.

```css
::-moz-range-thumb {
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
}

::-webkit-slider-thumb {
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
}
```

Graby hand cursor for the range input.

Had to duplicate the above code because we can't use `:is()`/`:where()` for a [forgiving selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:is#forgiving_selector_parsing) as they [don't support pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/:is#is_does_not_select_pseudo-elements).

```css
:is(
		input[disabled] + label[for],
		label[for]:has(+ input[disabled]),
		label:has(input[disabled]),
		[disabled]
	) {
	cursor: not-allowed;
	color: var(--GrayText, GrayText);
}
```

Not allowed cursor and disabled text color for disabled elements and labels of disabled inputs.

The input + label setups that the selector matches:

- `<input disabled><label for></label>`{.language-html}
- `<label for></label><input disabled>`{.language-html}
- `<label><input disabled></label>`{.language-html}

### Type

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

Break really long words to avoid overflow.

Not yet well supported, so this is a progressive enhancement to avoid orphans and widows.

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

Link colours

Removing [Webkit's tap highlight](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5)

```css
mark {
	background-color: var(--Mark, Mark);
	color: var(--MarkText, MarkText);
}
```

Mark colours

### Blocks

```css
* {
	margin: 0;
	padding: 0;
}
```

Removing all margin and padding

```css
table {
	border-collapse: collapse;
	width: 100%;
}
```

Responsive tables

```css
th,
td {
	border: thin solid var(--CanvasText, CanvasText);
}
```

Table cell borders

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

Preformatted text blocks scroll and don't break text, also set a sensible tab size.

```css
p:empty {
	display: none;
}
```

Hide empty paragraphs

### Forms

```css
button {
	background-color: var(--ButtonFace, ButtonFace);
	border-color: var(--ButtonBorder, ButtonBorder);
	color: var(--ButtonText, ButtonText);
	font: inherit;
}
```

Button colours and font fix.

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

Font fix
Width
Resizing and min height with progressive enhancements

```css
fieldset {
	border: 0;
}
```

Remove the fieldset border

```css
input:not([type="checkbox"], [type="radio"]),
select {
	display: block;
	font: inherit;
	width: 100%;
}
```

Font fix
Width

```css
input:is([type="tel"], [type="text"]),
textarea,
select {
	background-color: var(--Field, Field);
	border: thin solid var(--FieldText, FieldText);
	color: var(--FieldText, FieldText);
}
```

Field colours

```css
button,
input:not([type="checkbox"], [type="radio"], [type="file"], [type="range"]),
select,
textarea {
	border-style: solid;
}
```

Solid borders

```css
input[type="range"][orient="vertical"] {
	appearance: slider-vertical;
	writing-mode: bt-lr;
}
```

[Vertical range controls](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#putting_it_all_together)

```css
input:is([type="checkbox"], [type="radio"], [type="range"]),
progress {
	accent-color: var(--SelectedItem, SelectedItem);
}
```

Accent colour

```css
input:is([type="checkbox"], [type="radio"], [type="range"])[id] ~ label[for],
label:has(input:is([type="checkbox"], [type="radio"], [type="range"])),
label[for]:has(
		~ input:is([type="checkbox"], [type="radio"], [type="range"])[id]
	) {
	color: var(--SelectedItemText, SelectedItemText);
}
```

Sets the label text colour for any of the following situations:

- `<label for></label><input id>`{.language-html}
- `<input id><label for></label>`{.language-html}
- `<label><input></label>`{.language-html}

```css
::placeholder {
	color: var(--GrayText, GrayText);
}
```

Placeholder text is the same colour as disabled text.

```css
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

This rule contains a lot of duplicate code from certain above rules because we can't use `:is()`/`:where()` for a [forgiving selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:is#forgiving_selector_parsing) as they [don't support pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/:is#is_does_not_select_pseudo-elements).

### Media

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

aspect ratio variable
auto height
maximum width

```css
video,
iframe {
	--ratio: 16 / 9;
}
```

set the aspect ratio variable for certain elements

```css
svg {
	fill: var(--fill, var(--svg, currentcolor));
	stroke: var(--stroke, var(--svg, currentcolor));
	stroke-width: 0;
}
```

`currentcolor` for fill and stroke
remove stroke width on the svg element

```css
[data-icon] {
	display: inline-block;
}
```

Helper attribute for making an `img` or `svg` behave more icon like.

## Example

<p class="codepen" data-height="1000" data-default-tab="result" data-slug-hash="rNZqQZK" data-user="ellyloel" style="height: 1000px; display: flex; align-items: center; justify-content: center; border: 2px solid; margin-block: 1em; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ellyloel/pen/rNZqQZK">
  PDS Styles CSS Reset</a> by Elly Loel (<a href="https://codepen.io/ellyloel">@ellyloel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
