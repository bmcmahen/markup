var expect = require('learnboost/expect.js');
var $ = require('components/jquery');
var markup = require('./index');

describe('markup', function () {


  beforeEach(function(){
    var txt = this.txt = 'aristotle would absolutely love hamburgers';
    this.el = document.createElement('p');
    this.el.innerText = txt;
  });

  it('should insert tags in the correct position', function () {
    markup(0, 9, this.el, 'b');
    var $b = $(this.el).find('b');
    expect($b).to.have.length(1);
    expect($b.text()).to.be('aristotle');
  });

  it('should work with a variety of tags', function () {
    markup(10, 15, this.el, 'i');
    var $i = $(this.el).find('i');
    expect($i).to.have.length(1);
    expect($i.text()).to.be('would');
  });

  it('should return the created tag', function () {
    var el = markup(10, 15, this.el, 'a');
    el.href = 'http://bacon.com/';
    expect(el).to.be.ok();
    expect(el.innerText).to.be('would');
    expect(el.href).to.be('http://bacon.com/');
  });

  it('should set optional attributes', function () {
    var el = markup(10, 15, this.el, 'a', { href: 'http://benmcmahen.com/' });
    expect(el.href).to.be('http://benmcmahen.com/');
  });

  it('should be able to set different tagname to same indexes', function () {
    this.el.innerHTML = 'hello world';
    markup(0, 11, this.el, 'b');
    var el = markup(0, 11, this.el, 'i');
    expect(el).to.be.ok();
  });

});
