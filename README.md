# sweet-at-angular
Angular AtScript Annotations

# CAUTION: DEPRECATED ...
# head to github.com/ng-harmony for the successor ...

###Look into the gulpfile and test dir for instructions on usage.

###Using this module you can write Angular 2.0 like code.
Since it is intended to be used (mostly) with node.js modules via jspm
Please do check out slush-ng-harmony for a generator ... I'm about to create it 15/02/15
Please also feel free and funky to check out ng-harmony ... I'm about to create it as a rewrite (with example usage of this module here) of angular-clazz 15/02/15
there's no other need for annotations than Directive and Service.

###Basically what happens here is:
You write babel-ES6 code and can use Directive/Service-Annotations via sweet.js.
The gulpfile shows an example how to transpile this code to regular ES5.
Used correctly, the sourcemaps will point directly to your originally sweetened es6.

###Example
```
@Directive ({
    module: "app",
    selector: "tag"
})
class ExampleCtrl {
    constructor (scope, element) {
      let x = 1;
    }
    foo (abc) {
      let x = 1;
    }
    paramless () {
      ;
    }
    bodyless (param) {

    }
}
@Service ({
    module: "services",
    id: "SuperDataService"
})
class SomeDataService {
    constructor ($scope, $element) {
        let a = 1;
    }
    foo () { let a = 2; }
    get inject () { return "supercool"; }
}
```
