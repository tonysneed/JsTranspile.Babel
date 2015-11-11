"use strict";

var _marked = [numberGenerator, infiniteNumbers, take].map(regeneratorRuntime.mark);

//Simple generator that returns 3 items on demand
function numberGenerator() {
	return regeneratorRuntime.wrap(function numberGenerator$(_context) {
		while (1) switch (_context.prev = _context.next) {
			case 0:
				_context.next = 2;
				return 1;

			case 2:
				_context.next = 4;
				return 2;

			case 4:
				_context.next = 6;
				return 3;

			case 6:
			case "end":
				return _context.stop();
		}
	}, _marked[0], this);
}

var number = numberGenerator();
console.log(number.next()); //{value: 1, done: false}
console.log(number.next()); //{value: 2, done: false}
console.log(number.next()); //{value: 3, done: true}
console.log(number.next()); //{value: undefined, done: true}

//Create a generator that returns infinite numbers
function infiniteNumbers() {
	var i;
	return regeneratorRuntime.wrap(function infiniteNumbers$(_context2) {
		while (1) switch (_context2.prev = _context2.next) {
			case 0:
				i = 0;

			case 1:
				if (!true) {
					_context2.next = 7;
					break;
				}

				_context2.next = 4;
				return i;

			case 4:
				i++;
				_context2.next = 1;
				break;

			case 7:
			case "end":
				return _context2.stop();
		}
	}, _marked[1], this);
}

//Create a generator that can take a specific amount from a collection
function take(coll, number) {
	var i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step;

	return regeneratorRuntime.wrap(function take$(_context3) {
		while (1) switch (_context3.prev = _context3.next) {
			case 0:
				i = 0;
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				_context3.prev = 4;
				_iterator = coll[Symbol.iterator]();

			case 6:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					_context3.next = 15;
					break;
				}

				i = _step.value;

				if (!(number === i++)) {
					_context3.next = 10;
					break;
				}

				return _context3.abrupt("return");

			case 10:
				_context3.next = 12;
				return i;

			case 12:
				_iteratorNormalCompletion = true;
				_context3.next = 6;
				break;

			case 15:
				_context3.next = 21;
				break;

			case 17:
				_context3.prev = 17;
				_context3.t0 = _context3["catch"](4);
				_didIteratorError = true;
				_iteratorError = _context3.t0;

			case 21:
				_context3.prev = 21;
				_context3.prev = 22;

				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}

			case 24:
				_context3.prev = 24;

				if (!_didIteratorError) {
					_context3.next = 27;
					break;
				}

				throw _iteratorError;

			case 27:
				return _context3.finish(24);

			case 28:
				return _context3.finish(21);

			case 29:
			case "end":
				return _context3.stop();
		}
	}, _marked[2], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}

//Use the generators to grab 100 numbers
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = take(infiniteNumbers(), 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var number = _step2.value;

		console.log(number);
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}
//# sourceMappingURL=../maps/generators.js.map
