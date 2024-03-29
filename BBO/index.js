// DOM exercises

// Create a function that selects the second list and applies a class that sets some
// background color to it.

// Create a second function that, when triggered, selects all <li> elements on the
// page.The function also sets a class that sets some bg color to every <li> element.

// Create one more unordered list and one more function
// The function​ should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the
// text to uppercase.

function applyBgColor(position, color) {

  document.querySelectorAll('ul') [position-1].setAttribute('class', 'second')
  var change = document.getElementsByClassName('second');
  return change[0].style.backgroundColor = color;
}

applyBgColor(2, 'yellow');

function applyBgColorToAll(color) {

  var change = document.querySelectorAll('li');
  for (var i = 0; i < change.length; i++) {
    change[i].style.backgroundColor = color;
  }
}

applyBgColorToAll('red');

function applyBgColorToLastList(color) {

  var change = document.querySelectorAll('ul:last-of-type li');
  for (var i = 0; i < change.length; i++) {
    change[i].style.backgroundColor = color;
    change[i].style.textTransform = 'uppercase';
  }
}

applyBgColorToLastList('green');

// Traversing

// Create two unordered lists.x
// Each list should be wrapped in a div element.x
// One <li> element in the second list should have a class “active”, which sets its
// background color.
// Create a function that selects the <li> element with class “active”.
// Remove the class from that element, and then select the first <li> element in the
// first unordered list using node relations.
// Apply class to that newly selected <li> element

function changeActive() {

  var active = document.querySelector('ul:last-of-type li.active');
  active.classList.remove('active');
  var first = document.querySelector('ul:first-of-type li');
  first.classList.add('active');
}

changeActive();
















