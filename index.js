var iterator = require('matthewmueller/dom-iterator');

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
  var it = iterator(el).select(Node.TEXT_NODE).revisit(false);
  var next;
  var startindex;

  while (next = it.next()) {
    var olen = length;
    length += next.textContent.length;
    if (!startindex && (length >= from)) {
      startindex = true;
      range.setStart(next, from - olen);
    }

    if (length >= to) {
      range.setEnd(next, to - olen);
      break;
    }
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
