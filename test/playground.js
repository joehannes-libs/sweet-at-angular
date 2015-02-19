"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

angular.module("app").directive("tag", function () {
    return {
        controller: ZacheZechn,
        template: "<tag class='web-component'></tag>",
        replace: false,
        scope: {},
        restrict: "A"
    };
});
var XYZ = (function () {
    function XYZ(scope, element) {
        _classCallCheck(this, XYZ);

        var x$831 = 1;
    }

    _prototypeProperties(XYZ, null, {
        foo: {
            value: function foo(abc) {
                var x$831 = 1;
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
        },
        bodyless: {
            value: function bodyless(param) {},
            writable: true,
            configurable: true
        }
    });

    return XYZ;
})();

angular.module("services").service("SuperDataService", ZacheZechn);
var ZacheZechn = (function (_HippoCampus$A$O) {
    function ZacheZechn($scope, $element) {
        _classCallCheck(this, ZacheZechn);

        var a$832 = 1;
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
                var a$832 = 2;
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
                var y$833 = 1;
            },
            writable: true,
            configurable: true
        }
    });

    return ZacheZechn;
})(HippoCampus.A.O);

ZacheZechn.$inject = ["$scope", "$element"];
ZacheZechn.$inject = ["$scope", "$element"];
//# sourceMappingURL=playground.js.map