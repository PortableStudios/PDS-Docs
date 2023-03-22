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

#### Type

#### Block

#### Forms

#### Media

### Example
