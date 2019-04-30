var testy = {
	descs: {}, 
	testCounter: 0
}
testy.run = function(delay=0) { // TODO: add option to run immediately on page load, instead of manually calling run
	var i = 0
	for (var name in testy.descs) {
		console.log('***' + name)
		//setTimeout(descs[name].tests, delay*i)
		testy.descs[name]()
		i += 1
	}
}
export function describe(name, tests) {
	testy.descs[name] = tests
}
export function test(name, test) {
	console.log('Test ' + testy.testCounter + ': ' + name)
	testy.testCounter += 1
	test()
}
export function expect(expr, msg) {
	console.assert(expr, 'FAILED - ' + msg)
}

export { testy }
