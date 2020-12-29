/**
 * @type {import('./compile').compile}
 */
export const compile = (node) => {
  switch (node.type) {
    case 'StyleDeclaration': {
      return `${node.property}:${node.value};`;
    }
    case 'StyleRule': {
      let css = `${node.selector}{`;

      for (const declaration of node.declarations) {
        css += compile(declaration);
      }

      return `${css}}`;
    }
    case 'StyleSheet': {
      let css = '';

      for (const rule of node.rules) {
        css += compile(rule);
      }

      return css;
    }
    default: {
      throw new TypeError(`Unexpected node type: ${/** @type {any} */ (node).type}`);
    }
  }
};
