import { module, test } from 'qunit';
import { commaListsAnd, oneLine, stripIndent } from 'common-tags';

module('Unit | Utility | common tags');

test('commaListsAnd', function(assert) {
  let listString = commaListsAnd`
    RGB is ${['red', 'green', 'blue']}
  `;
  // no oxford comma here 😱
  let expected = 'RGB is red, green and blue';
  assert.equal(listString, expected);
});

test('oneLine', function(assert) {
  let oneLineString = oneLine`
    foo
    bar
    baz
  `;
  let expected = 'foo bar baz';
  assert.equal(oneLineString, expected);
});

test('stripIndent', function(assert) {
  let multilineString = stripIndent`
    This is a very long, indented string.
    After stripping, it should have no indentation left.
  `;
  let expected =
    'This is a very long, indented string.\nAfter stripping, it should have no indentation left.';
  assert.equal(multilineString, expected);
});
