# libSdk-npm

A minimal SDK for creating, exporting, and interacting with modular JavaScript libraries. This package provides a simple interface for defining libraries, managing their exports, and performing type-safe operations on them.

## Features

- **Create libraries** with named exports.
- **Export values** as normal, asker (function), or getter (function) types.
- **Validate** library and export structures.
- **Request** exports using a unified API.

## Installation

```sh
npm install libSdk-npm
```

## Usage

Importing

```js
import {
    createLibrary,
    createLibraryExport,
    checkLibrary,
    checkLibraryExport,
    libraryRequest
} from "@egstudio/libsdk"; // ESM Format

const libsdk = require("@egstudio/libsdk"); // CommonJS Format
```

Creating a Library with a couple of exports

```js
const myLib = createLibrary("myLib");

const log = createLibraryExport("normal", function log() {
    console.log("Hello World!");
});

myLib.exports.set("log", log);

export default myLib; // ESM Format

module.exports = myLib; // Common JS
// or
module.exports = {myLib};
```

You can also check out the library that powers the [sdk](./sdk.lib.js) itself. Or you can check out the [docs](https://evergreen-studios.github.io/libSdk-npm/).