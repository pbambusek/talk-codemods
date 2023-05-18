# Executing on codebase

You can try following commands as they were mentioned in the talk. All of them assume you run them from the current directory.

1. Babel CLI

```bash
yarn ts-node ../node_modules/.bin/babel --plugins=./plugin.ts -x .ts --keep-file-extension --verbose --out-dir src src
```

2. @codemod/cli

```bash
yarn codemod -p ./plugin.ts --printer prettier -o '{"doMagic":true}' src
```

3. kodemod

```bash
yarn kodemod -p ./plugin.ts -o '{"doMagic":true}' src
```
