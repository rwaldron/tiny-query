module("Selection");

test("Tag names", 1, function() {
	var elems = new $$("article");

	equal(elems.length, 1, "Returns the correct number of elements");
});

test("Class names", 1, function() {
	var elems = new $$(".test-a");

	equal(elems.length, 2, "Returns the correct number of elements");
});

test("IDs", 1, function() {
	var elem = new $$("#test-id");

	equal(elem.length, 1, "Returns the correct number of elements");
});

test("Complex selectors", 3, function() {
	equal(new $$(".test-a.test-b").length, 1, "Returns the correct number of elements");
	equal(new $$(".test-a, .test-b").length, 3, "Returns the correct number of elements");
	equal(new $$(".test-c > span").length, 1, "Returns the correct number of elements");
});

test("Context", 1, function() {
	var span = document.getElementById("test-id");

	equal(new $$(".test-c", span).length, 1, "Returns the correct number of elements");
});
