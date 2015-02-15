"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

angular.module("app").directive("tag", function () {
    return {
        controller: XY,
        template: "<tag class='web-component'></tag>",
        replace: false,
        scope: {},
        restrict: "A"
    };
});
var XY = (function () {
    function XY(scope, element) {
        _classCallCheck(this, XY);

        var x$818 = 1;
    }

    _prototypeProperties(XY, null, {
        foo: {
            value: function foo(abc) {
                var x$818 = 1;
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

    return XY;
})();

XY.$inject = ["scope", "element"];
angular.module("services").service("SuperDataService", ZacheZechn);
var ZacheZechn = (function () {
    function ZacheZechn($scope, $element) {
        _classCallCheck(this, ZacheZechn);

        var a$824 = 1;
    }

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
                var a$824 = 2;
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
                var y$825 = 1;
            },
            writable: true,
            configurable: true
        }
    });

    return ZacheZechn;
})();

ZacheZechn.$inject = ["$scope", "$element"];
//# sourceMappingURL=playground.js.map