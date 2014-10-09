var range = require('../index');

var el = document.createElement('p');
el.innerText = 'Enim commodo dolor culpa minim reprehenderit occaecat ad nostrud ad sunt occaecat aliqua irure excepteur. Eiusmod culpa dolor eu mollit eiusmod dolor do qui fugiat magna labore. Dolor culpa veniam ex velit sint minim quis commodo deserunt qui nisi commodo. Elit do exercitation adipisicing velit est incididunt consectetur in mollit in minim eu est ad. Id pariatur aliqua laboris dolor consectetur esse minim exercitation amet nisi deserunt occaecat voluptate. Excepteur veniam adipisicing reprehenderit ad minim dolor tempor anim nisi eiusmod. Amet cillum enim quis cupidatat occaecat eiusmod anim veniam voluptate eu cillum voluptate. Nostrud duis exercitation mollit velit pariatur incididunt laboris qui quis magna enim do nostrud.';

range(5, 10, el, 'b');

console.log(el);
