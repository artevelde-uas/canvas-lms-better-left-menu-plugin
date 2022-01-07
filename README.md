# Canvas LMS Better Left Menu Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that adds
several options to improve the left menu.

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-better-left-menu-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-better-left-menu-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-better-left-menu-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-better-left-menu-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-better-left-menu-plugin)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-better-left-menu-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-better-left-menu-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import betterLeftMenuPlugin from '@artevelde-uas/canvas-lms-better-left-menu-plugin';

addPlugin(betterLeftMenuPlugin, {
    classicStyles: true,
    thinScrollbar: true,
    showScrollbar: 'hover',
    resetOnScroll: true
});

run();
```

### Options

|       Name        |        Type         | Default | Description                                                                                                                       |
| :---------------: | :-----------------: | :-----: | :---------------------------------------------------------------------------------------------------------------------------------|
| **showScrollbar** | `{String\|Boolean}` | `true`  | Determines whether the scrollbar should be shown or not, or only on hover <br /> (possible values: `true`, `'hover'` or `false`). |
| **thinScrollbar** |     `{Boolean}`     | `false` | Use a thin scrollbar.                                                                                                             |
| **classicStyles** |     `{Boolean}`     | `false` | Use the classic menu styles (with current selection background in primary color).                                                 |
| **resetOnScroll** |     `{Boolean}`     | `false` | Determines whether the scrollbar should be reset on scroll or when it is expanded.                                                |
