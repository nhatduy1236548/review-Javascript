//Create a closure which has one inner function
 function a(){
    function b(){}
    return {
        b: b()
    }
 }