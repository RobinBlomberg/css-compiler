import Chai from 'chai';
import { Nodes } from '@robinblomberg/css-ast';
import { compile } from './compile.js';

describe('compile', () => {
  describe('StyleDeclaration', () => {
    it('should compile StyleDeclaration nodes correctly', () => {
      Chai.assert.strictEqual(
        compile(
          Nodes.declaration('margin', 0)
        ),
        'margin:0px;'
      );
    });
  });

  describe('StyleRule', () => {
    it('should compile StyleRule nodes correctly', () => {
      Chai.assert.strictEqual(
        compile(
          Nodes.styleRule('button.Button--Primary', {
            padding: 16,
            backgroundColor: 'green',
            color: 'white'
          })
        ),
        'button.Button--Primary{padding:16px;background-color:green;color:white;}'
      );
    });
  });

  describe('StyleSheet', () => {
    it('should compile StyleSheet nodes correctly', () => {
      Chai.assert.strictEqual(
        compile(
          Nodes.styleSheet({
            Button: {
              padding: 16,
              backgroundColor: 'green',
              color: 'white'
            },
            Form: {
              padding: 64
            }
          })
        ),
        '.Button{padding:16px;background-color:green;color:white;}.Form{padding:64px;}'
      );
    });
  });

  describe('Unknown node', () => {
    it('should throw an error', () => {
      Chai.assert.throws(() => {
        compile(/** @type {any} */ ({
          type: 'Unknown'
        }));
      });
    });
  });
});
