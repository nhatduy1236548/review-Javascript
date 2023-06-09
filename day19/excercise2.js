//Create a closure which has three inner functions
function a(){
    function b(){}
    function c(){}
    function d(){}
    return {
        b: b(),
        c: c(),
        d: d()
    }
 }