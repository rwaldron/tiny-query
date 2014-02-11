# Tiny jQuery

Build a small DOM manipulation library that exposes a jQuery-like API.

Unit tests have been provided. They are written with the QUnit testing
framework, and you can run them from the command line (see below), or by
visiting the `test/index.html` file from a browser. To complete this task,
get all the tests to pass!

## Installing (optional)

You'll need [Node.js (http://nodejs.org)](http://nodejs.org) and [Grunt
(http://gruntjs.com)](http://gruntjs.com) if you want to lint your code and run
the tests from the command line.

## API

Select DOM elements:

```javascript
var elems1 = $$(".selector #string > .here");
var elems2 = tQuery(".selector #string > .here");
```

Array-like API:

```javascript
var spans = $$("span");

spans.length;  // Number, eg. 4
spans[0];      // DOM element
spans[3];      // DOM element
spans[4];      // undefined
```

Optional `context` specified as a second argument:

```javascript
var elems = $$(".bob", document.getElementById("bocoup"));
```

Iteration over selection:

```javascript
$$("div").forEach(function(elem, idx) {
  console.log("Element #" + idx + " in this selection: ", elem);
});
```
