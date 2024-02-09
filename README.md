# `expose-env`

## Overview

This is a simple NPM script that aims at providing a simple cross-platform way of exposing environment variables onto NPM script commands.

This packages takes on the idea of [`cross-var`](https://github.com/elijahmanor/cross-var) and aims at implementing similar functionality.
Why not just use [`cross-var`](https://github.com/elijahmanor/cross-var) then? Simply because the package hasn't been maintained in years and is exposed to security vulnerabilities at this point.


## Installation

This module is distributed via [npm](https://npmjs.com) and should be installed as one of your project's `devDependencies`:

```text
npm install --save-dev expose-env
```

## Usage

Use in your NPM scripts:

```json
{
  "scripts": {
    "build": "expose-env firebase emulators:start --project %FIREBASE_PROJECT_ID%"
  }
}
```

If the `FIREBASE_PROJECT_ID` environment variable is set, `expose-env` will run the following command:

```text
# FIREBASE_PROJECT_ID=xxx
firebase emulators:start --project xxx
```


## Contributing 

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
