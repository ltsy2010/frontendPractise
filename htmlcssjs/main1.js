var res = (function(paras) {
    var a = 20;
    console.log(a + paras);

    //window.mainA = a;
    return a ; //a is global
})(100);
//a is not global if no return or window...
