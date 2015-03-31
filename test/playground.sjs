@Directive ({
    module: "app",
    alias: "tata",
    ctrl: "blabla",
    template: "tpl.jade"
})
class XYZ {
    constructor (scope, element) {
      let x = 1;
    }
    foo (abc) {
      let x = 1;
    }
    paramless () {
      ;
    }
}

@Controller ({
    module: "services",
    id: "SuperDataService"
})
class ZacheZechn extends HippoCampus.A.O {
    constructor ($scope, $element) {
        let a = 1;
    }
    static beep () { bop && bop(); }
    static funk () { foo && foo(); }
    foo () { let a = 2; }
    get inject () { "supercool"; }
    set inject (arg) { $inject.push(arg); }
    bar () { let y = 1; }
}