;(function (window) {
    window.myNamespace = window.myNamespace || {};

    function myFunction(test) {
        return test;
    }

    myNamespace.test = {
        myFunction: myFunction
    }

})(window);