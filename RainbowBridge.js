// function onComplete(msg1,msg2){

//     var jsonstr=JSON.stringify(msg2);
//     alert(jsonstr);
    
// }

(function(){

  var abc={

    onComplete: function (port, result) {
        // PrivateMethod.onNativeComplete(port, result);
        var jsonStr=JSON.stringify(result);
        alert(jsonStr);
    }
  }; 

})()

