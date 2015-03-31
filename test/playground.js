"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

angular.module("app").directive("tata", function () {
    return {
        controller: "blabla",
        templateUrl: "tpl.jade",
        replace: false,
        scope: {},
        restrict: "A"
    };
});
angular.module("app").controller("blabla", ZacheZechn);
var XYZ = (function () {
    function XYZ(scope, element) {
        _classCallCheck(this, XYZ);

        var x$852 = 1;
    }

    _prototypeProperties(XYZ, null, {
        foo: {
            value: function foo(abc) {
                var x$852 = 1;
            },
            writable: true,
            configurable: true
        },
        paramless: {
            value: function paramless() {
                ;
            },
            writable: true,
            configurable: true
        }
    });

    return XYZ;
})();

angular.module("services").controller("SuperDataService", ZacheZechn);
var ZacheZechn = (function (_HippoCampus$A$O) {
    function ZacheZechn(args) {
        _classCallCheck(this, ZacheZechn);

        _get(Object.getPrototypeOf(ZacheZechn.prototype), "constructor", this).call(this, args);
        _get(Object.getPrototypeOf(ZacheZechn.prototype), "constructor", this).call(this, args);
        var a$853 = 1;
    }

    _inherits(ZacheZechn, _HippoCampus$A$O);

    _prototypeProperties(ZacheZechn, {
        beep: {
            value: function beep() {
                bop && bop();
            },
            writable: true,
            configurable: true
        },
        funk: {
            value: function funk() {
                foo && foo();
            },
            writable: true,
            configurable: true
        }
    }, {
        foo: {
            value: function foo() {
                var a$853 = 2;
            },
            writable: true,
            configurable: true
        },
        inject: {
            get: function () {
                "supercool";
            },
            set: function (arg) {
                $inject.push(arg);
            },
            configurable: true
        },
        bar: {
            value: function bar() {
                var y$854 = 1;
            },
            writable: true,
            configurable: true
        }
    });

    return ZacheZechn;
})(HippoCampus.A.O);

ZacheZechn.$inject = ["args"];
ZacheZechn.$inject = ["$scope", "$element"];
//# sourceMappingURL=playground.js.map