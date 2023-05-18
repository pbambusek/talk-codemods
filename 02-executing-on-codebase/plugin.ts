import { PluginObj } from '@babel/core';

const plugin = (): PluginObj => ({
    visitor: {
        Identifier(path) {
            if (
                path.node.name === 'n' &&
                path.findParent((p) => p.isFunctionDeclaration() && p.node.id.name === 'square')
            ) {
                path.node.name = 'x';
            }
        },
    },
});

export default plugin;
