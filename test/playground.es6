angular.module('app').directive('tag', () => {
    return {
        controller: XY,
        template: '<tag class=\'web-component\'></tag>',
        replace: false,
        scope: {},
        restrict: 'A'
    };
});
class XY {
    constructor(scope, element) {
        let x$818 = 1;
    }
    foo(abc) {
        let x$818 = 1;
    }
    paramless() {
        ;
    }
    bodyless(param) {
    }
}
XY.$inject = [
    'scope',
    'element'
];
angular.module('services').service('SuperDataService', ZacheZechn);
class ZacheZechn {
    constructor($scope, $element) {
        let a$824 = 1;
    }
    static beep() {
        bop && bop();
    }
    static funk() {
        foo && foo();
    }
    foo() {
        let a$824 = 2;
    }
    get inject() {
        'supercool';
    }
    set inject(arg) {
        $inject.push(arg);
    }
    bar() {
        let y$825 = 1;
    }
}
ZacheZechn.$inject = [
    '$scope',
    '$element'
];