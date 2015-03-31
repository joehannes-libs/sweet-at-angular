/**
 * Copyright © 2015 Johannes Neugschwentner
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
macroclass $namespace {
    pattern {
        rule { . $class }
    }
}
macroclass $cns {
     pattern {
         rule { $classdef:($sig... $cname:ident extends $mname $baseclass:$namespace... ) }
     }
     pattern {
         rule { $classdef:($sig... $cname:ident extends $bname) }
     }
     pattern {
         rule { $classdef:($sig... $cname:ident) }
     }
}
macroclass $method {
    pattern {
        rule { $$mname:ident... }
    }
}
macroclass $klass {
    pattern {
        rule { $$klass:($definition:$cns {
            constructor ($cparams(,)...) { $cwhatever ... }
            $methods:($mname:$method ($mparams ...) {$mwhatever ... }) ...
        }) }
    }
}

macro makeTag {
    case { _ $x:lit... } => {
        var pattern = #{$x...};
        var tokenString = pattern[0].token.value + pattern[1].token.value + pattern[2].token.value + pattern[3].token.value + pattern[4].token.value;
        letstx $stringValue = [makeValue(tokenString, #{$here})];
        return #{$stringValue}
    }
}

macro (@Controller) {
    rule { ({ module: $module:lit, id: $id:lit }) $class:$klass } => {
        angular.module($module).controller($id, $class$$klass$definition$classdef$cname);

        $class$$klass$definition$classdef {
            constructor (...args) { 
                super(...args);
                $class$$klass$cwhatever ... 
            }
            $class$$klass$methods ...
        }
        $class$$klass$definition$classdef$cname.$inject = [stringify $class$$klass$cparams ...];

    }
}

export (@Controller);

macro (@Service) {
    rule { ({ module: $module:lit, id: $id:lit }) $class:$klass } => {
        angular.module($module).service($id, $class$$klass$definition$classdef$cname);

        $class$$klass$definition$classdef {
            constructor (...args) { 
                super(...args);
                $class$$klass$cwhatever ... 
            }
            $class$$klass$methods ...
        }
        $class$$klass$definition$classdef$cname.$inject = [stringify $class$$klass$cparams ...];

    }
}

export (@Service);

macro (@Directive) {
    rule { ({ module: $module:lit, alias: $alias:lit, ctrl: $ctrl:lit, template: $url:lit }) $class:$klass } => {
        angular.module($module).directive($alias, () => {
            return {
                controller: $ctrl,
                templateUrl: $url,
                replace: false,
                scope: {},
                restrict: "A"
            };
        });
        angular.module($module).controller($ctrl, $class$$klass$definition$classdef$cname);

        $class$$klass$definition$classdef {
            constructor (args) { 
                super(args);
                $class$$klass$cwhatever ... 
            }
            $class$$klass$methods ...
        }
        $class$$klass$definition$classdef$cname.$inject = [stringify $class$$klass$cparams ...];

    }
}

export (@Directive);

macro _stringify {
    case { _ $val } => {
        letstx $stringVal = [makeValue(unwrapSyntax(#{$val}).toString(), #{$val})];
        return #{$stringVal}
    }
}
macro stringify {
    rule { $first:ident $val:ident ... } => {
        _stringify $first stringify , $val ...
    }
    rule { $val:ident } => {
        _stringify $val
    }
    rule { , $first $val:ident ... } => {
        , _stringify $first stringify , $val ...
    }
    rule { , $val:ident } => {
        , _stringify $val
    }
    rule { $val:lit } => { $val }
    rule { , } => { }
}
