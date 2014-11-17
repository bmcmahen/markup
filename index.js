/**
 * Module dependencies
 */

var iterator = require('dom-iterator');

/**
 * Add markup to an element
 *
 * @param  {Number} from
 * @param  {Number} to
 * @param  {Element} el
 * @param  {String} tagName
 * @return {Range}
 */

module.exports = function (from, to, el, tagName, attrs) {

  var length = 0;
  var range = document.createRange();
  var it = iterator(el.firstChild, el).select(Node.TEXT_NODE).revisit(false);
  var next;
  var startindex;

  function parse(n) {
    var olen = length;
    var txtLen = n.textContent.length;
    if (!txtLen) return;

    length += txtLen;
    if (!startindex && (length >= from)) {
      startindex = true;
      range.setStart(n, from - olen);
    }

    if (length >= to) {
      range.setEnd(n, to - olen);
      return false;
    }

    return true;
  }

  parse(el.firstChild);

  while (next = it.next()) {
    if (!parse(next)) break;
  }

  var node = document.createElement(tagName);

  // set optional attributes
  if (attrs) {
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }
  }

  range.surroundContents(node);
  return node;
};
