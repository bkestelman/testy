# testy

Simple testing framework for JS

## Setup
Create a file to put your tests in and import the testy module 
```
// in mytests.js
import { testy, describe, test, expect } from 'http://192.81.214.140:8080/testy.js' 
```
Add testy and your tests file to your html
```
// in index.html
<script type="module" src="http://192.81.214.140:8080/testy.js" integrity="sha256-Ly7thm7MFT8C7NPj2Z5Q2BtZ/ddIamrwzpTot1FesSU=" crossorigin="anonymous"></script>
<script type="module" src="mytests.js"></script>
```

Provides some of the standard testing functions available in other frameworks:
```
// mytests.js
import { testy, describe, test, expect } from 'http://192.81.214.140:8080/testy.js'

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
testy.run() // run tests
```
