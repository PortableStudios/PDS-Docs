---
title: Overview
date: 2023-02-27
tags:
  -
eleventyNavigation:
  order: 1
---

### Installation

This is just installing from the [GitHub repo](https://github.com/PortableStudios/PDS-Styles/).

```shell
npm install PortableStudios/PDS-Styles
# or
yarn add PortableStudios/PDS-Styles
# or
pnpm add PortableStudios/PDS-Styles
```

### Usage

```html
<link rel="stylesheet" href="/path/to/styles.css" />
```

Done! 🎉

... seriously that's it, it's just a CSS file. No more, no less.

### Repo structure

This is the structure of the PDS Styles repo.

<div aria-hidden="true">
{% markdown %}
```txt
┌── css/
│   ├── defaults/
│   │   ├── index.css
│   │   ├── a11y.css
│   │   ├── base.css
│   │   ├── buttons.css
│   │   ├── forms.css
│   │   ├── links.css
│   │   ├── media.css
│   │   ├── nav.css
│   │   ├── type.css
│   ├── layouts/
│   │   ├── index.css
│   ├── resets/
│   │   ├── index.css
│   │   ├── root.css
│   │   ├── a11y.css
│   │   ├── type.css
│   │   ├── blocks.css
│   │   ├── forms.css
│   │   ├── media.css
│   ├── themes/
│   │   ├── index.css
│   ├── tokens/
│   │   ├── index.css
│   │   ├── colour.css
│   │   ├── type.css
│   │   ├── space.css
│   ├── utilities/
│   │   ├── index.css
│   │   ├── no-print.css
│   │   ├── truncate.css
│   │   ├── visually-hidden.css
│   └── styles.css
├── dist/
│   └── styles.css
├── patches/
│   └── cssremedy@0.1.0-beta.2.patch
├── .editorconfig
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── prettier.config.cjs
├── readme.md
└── stylelint.config.cjs
```
{% endmarkdown %}
</div>

- css/
  - defaults/
    - index.css
    - a11y.css
    - base.css
    - buttons.css
    - forms.css
    - links.css
    - media.css
    - nav.css
    - type.css
  - layouts/
    - index.css
  - resets/
    - index.css
    - root.css
    - a11y.css
    - type.css
    - blocks.css
    - forms.css
    - media.css
  - themes/
    - index.css
  - tokens/
    - index.css
    - colour.css
    - type.css
    - space.css
  - utilities/
    - index.css
    - no-print.css
    - truncate.css
    - visually-hidden.css
  - styles.css
- dist/
  - styles.css
- patches/
  - cssremedy@0.1.0-beta.2.patch
- .editorconfig
- .gitignore
- index.html
- package.json
- pnpm-lock.yaml
- postcss.config.cjs
- prettier.config.cjs
- readme.md
- stylelint.config.cjs

{.visually-hidden}
