//Fix the error
function myFunction() {
    let myObject = {
        objProperty: 'some text',
        objMethod: function() {
            console.log(objProperty);
        }
    }
    myObject.objMethod();
}

objProperty="hello";

myFunction();



