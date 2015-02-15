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

macroclass $cns {
     pattern {
         rule { $sig... $cname:ident }
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
            $methods:(constructor ($cparams(,)...) { $cwhatever ... })
        }) }
    }
    pattern {
        rule { $$klass:($definition:$cns {
            $methods:(
            constructor ($cparams(,)...) { $cwhatever ... }
            $($mname:$method ($mparams ...) {$mwhatever ... }) ...
            )
        }) }
    }
    pattern {
        rule { $$klass:($definition:$cns {
            $methods:(
            $methods_pre:($($mname:$method ($mparams ...) {$mwhatever ... }) ...)
            constructor ($cparams(,)...) { $cwhatever ... }
            )
        }) }
    }
    pattern {
        rule { $$klass:($definition:$cns {
            $methods:(
            $methods_pre:($($mname:$method ($mparams ...) {$mwhatever ... }) ...)
            constructor ($cparams(,)...) { $cwhatever ... }
            $methods_post:($($mname:$method ($mparams ...) {$mwhatever ... }) ...)
            )
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

macro (@Directive) {
   rule { ({ module: $module:lit, selector: $selector:lit }) $class:$klass } => {
       angular.module($module).directive($selector, () => {
           return {
               controller: $class$$klass$definition$cname,
               template: makeTag "<" $selector " class='web-component'></" $selector ">",
               replace: false,
               scope: {},
               restrict: "A"
           };
       });

       $class$$klass
       $class$$klass$definition$cname.$inject = [stringify $class$$klass$methods$cparams ...];


   }
}

export (@Directive);

macro (@Service) {
    rule { ({ module: $module:lit, id: $service:lit }) $class:$klass } => {
        angular.module($module).service($service, $class$$klass$definition$cname);

        $class$$klass
        $class$$klass$definition$cname.$inject = [stringify $class$$klass$methods$cparams ...];


    }
}

export (@Service);

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
