module("Iteration", {
	setup: function() {
		this.elems = new $$(".test-a, .test-b");
	}
});

test("Stores elements on numeric attributes", 3, function() {
	var elems = this.elems;

	ok(elems[0] instanceof Element);
	ok(elems[1] instanceof Element);
	ok(elems[2] instanceof Element);
});

test("Correctly iterates over the provided selection", 6, function() {
	var counter = 0;
	var elems = this.elems;

	elems.forEach(function(elem, idx) {
		equal(elems[idx], elem, "Supplies the correct element on each iteration");
		equal(idx, counter, "Supplies the correct index");
		counter++;
	});
});

test("Sets the iterator context to the selection", function() {
	var elems = this.elems;

	elems.forEach(function(elem, idx) {
		equal(this, elems[idx], "Correct context");
	});
});
