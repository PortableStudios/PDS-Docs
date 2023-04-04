---
title: Overview
date: 2023-02-27
tags:
  -
eleventyNavigation:
  order: 1
---

## Installation

### 1. Authenticate via NPM

To ensure you can install private Portable packages, login to our GitHub repo via NPM:

(This only has to be done once per computer, skip this step if you've already done this)

```shell
npm login --registry=https://npm.pkg.github.com
```

When prompted for "Username", enter your GitHub username.

When prompted for "Password", enter a "Personal Access Token".
To generate a token follow these instructions:

- In GitHub visit Settings > Developer settings > Personal access tokens
- Press "Generate new token"
- Name the new token "portable_npm_login" or something similar
- Select the "repo", "write:packages" and "read:packages" permissions

Finally, when prompted for "Email" enter your Portable email address.

### 2. Add `pds-styles` to your project

Create an `.npmrc` file in your project root with the following contents:

```txt
@portablestudios:registry=https://npm.pkg.github.com
```

Install `pds-styles` to your `package.json`:

```shell
npm install @portablestudios/pds-styles
# or
yarn add @portablestudios/pds-styles
# or
pnpm add @portablestudios/pds-styles
```

## Usage

```html
<link rel="stylesheet" href="/path/to/styles.css" />
```

Done! 🎉

... seriously that's it, it's just a CSS file. No more, no less.

## Repo structure

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
