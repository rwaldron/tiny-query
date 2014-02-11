module("Extra credit");

test("Constructor invocation", 2, function() {
	ok(new $$("body") instanceof tQuery, "Returns an instance of tQuery when called with 'new'");
	ok($$("body") instanceof tQuery, "Returns an instance of tQuery when called without 'new'");
});
