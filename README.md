# nuxt-element

[![npm](https://img.shields.io/npm/v/nuxt-element.svg)](https://www.npmjs.com/package/nuxt-element) <!-- ![license](https://img.shields.io/github/license/khofaai/nuxt-element.svg) [![Build Status](https://travis-ci.org/khofaai/nuxt-element.svg?branch=master)](https://travis-ci.org/khofaai/nuxt-element) [![npm](https://img.shields.io/npm/dw/nuxt-element.svg)](https://www.npmjs.com/package/nuxt-element) [![npm](https://img.shields.io/npm/dt/nuxt-element.svg)](https://www.npmjs.com/package/nuxt-element) -->

Element UI Module for Nuxt.js to add element-ui components to your application.

## Usage

You need to install `nuxt-element` first using

*npm*
```bash
npm i nuxt-element
```

or *yarn*

```bash
yarn add nuxt-element
```

then inside `nuxt.config.js` under `modules` property you need to add `nuxt-element` like:

```js
...
   modules: [
     'nuxt-element',
   ]
...
```

## Options

### `locale`

- **optional**
- Type: `string`
- Default: `en`

there are two way to add options as:

```js
...
  element: {
    locale: 'en',
  }
...
```

or
```js
...
  modules: [
    ['nuxt-element', {
      locale: 'en',
    }]
  ]
...
```

