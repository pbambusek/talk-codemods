/**
 * Run this example with:
 * yarn ts-node babel-codemod.ts
 */

import { parse, traverse } from '@babel/core';
import generate from '@babel/generator';

const code = `
    function square(n) {
        return n * n;
    }

    function cube(n) {
        return n * n * n;
    }
`;

const ast = parse(code);
traverse(ast, {
    // We match all Identifiers
    Identifier(path) {
        if (
            path.node.name === 'n' &&
            // We check if the matched node has a parent FunctionDeclaration node with name 'square'
            path.findParent((p) => p.isFunctionDeclaration() && p.node.id.name === 'square')
        ) {
            path.node.name = 'x';
        }
    },
});
const output = generate(ast);

console.log(output.code);
