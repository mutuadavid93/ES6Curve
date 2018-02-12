"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bird = function () {
    function Bird(name) {
        _classCallCheck(this, Bird);

        this.name = name;
    }

    _createClass(Bird, [{
        key: "master",
        value: function master() {
            return "King Bird";
        }
    }, {
        key: "birdName",
        get: function get() {
            return this.name;
        }
    }]);

    return Bird;
}();

/*
 *  Explicit constructor in a child class.
 *  NB: Must use super keyword.
 */

var Duck = function (_Bird) {
    _inherits(Duck, _Bird);

    function Duck(name, voice) {
        _classCallCheck(this, Duck);

        // invokes Bird Class's constructor A$AP on instantiation.
        var _this = _possibleConstructorReturn(this, (Duck.__proto__ || Object.getPrototypeOf(Duck)).call(this, name));

        _this.voice = voice;
        return _this;
    }

    _createClass(Duck, [{
        key: "speak",
        value: function speak() {
            return _get(Duck.prototype.__proto__ || Object.getPrototypeOf(Duck.prototype), "master", this).call(this); // Overrides Bird Class's master().
        }
    }]);

    return Duck;
}(Bird);

;

var duck = new Duck("Big Lora", "Squirks");
// console.log(`${duck.birdName} is a ${duck.speak()}`);


/*
 *  Implicitly Using a Parent Constructor.
 */

var Hen = function (_Bird2) {
    _inherits(Hen, _Bird2);

    function Hen() {
        _classCallCheck(this, Hen);

        return _possibleConstructorReturn(this, (Hen.__proto__ || Object.getPrototypeOf(Hen)).apply(this, arguments));
    }

    _createClass(Hen, [{
        key: "doStuff",
        value: function doStuff() {
            return this.name; // RoverHen, initialized by Bird's contructor.
        }
    }, {
        key: "master",
        value: function master() {
            return "Queen Bird";
        }
    }]);

    return Hen;
}(Bird);

;

// Now inherit Everything from Bird
// including the constructor.
var hen = new Hen("RoverHen");
var bird = new Bird("Raven");

// console.log(hen.doStuff()); // RoverHen


// Perform  Test on the Instances Passed
function checkOut() {
    var rs = [];

    for (var _len = arguments.length, birds = Array(_len), _key = 0; _key < _len; _key++) {
        birds[_key] = arguments[_key];
    }

    for (var i = 0; i < birds.length; i++) {
        if (birds[i] instanceof Bird) {
            rs.push(birds[i].master());
        }
    }

    return rs;
}

// invoke it
var newrs = checkOut(hen, bird);
console.log(newrs);