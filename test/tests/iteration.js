module("Iteration");

test("Stores elements on numeric attributes", 3, function() {
	var selection = new $$(".test-a, .test-b");

	ok(selection[0] instanceof Element);
	ok(selection[1] instanceof Element);
	ok(selection[2] instanceof Element);
});

test("Correctly iterates over the provided selection", 6, function() {
	var counter = 0;
	var selection = new $$(".test-a, .test-b");

	selection.forEach(function(elem, idx) {
		equal(selection[idx], elem, "Supplies the correct element");
		equal(idx, counter, "Supplies the correct index");
		counter++;
	});
});

test("Sets the iterator context to the current element", 3, function() {
	var selection = new $$(".test-a, .test-b");

	selection.forEach(function(elem, idx) {
		equal(this, selection[idx], "Correct context");
	});
});
