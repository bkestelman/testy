# testy

Simple testing framework for JS

Import as ES6 module:
```
TODO
```

Provides some of the standard testing functions available in other frameworks:
```
describe("Tests for some component", function() {
	// some initialization code
	test("This thing works", function() {
		expect( someBooleanExpression , "Oops. Expected " + expectedResult )
		expect( anotherBoolExpr , "Drat. This one really should have worked" )
	})
	test("Another test", function() {
		// ...
	})
	// ...
})
describe...
...
testy.run()
```
