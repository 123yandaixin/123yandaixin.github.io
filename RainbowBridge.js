(function () {
//     var doc = document;
//     var win = window;
//     var ua = win.navigator.userAgent;
//     var JS_BRIDGE_PROTOCOL_SCHEMA = "rainbow";
//     var increase = 1;
//     var RainbowBridge = win.RainbowBridge || (win.RainbowBridge = {});

    var ExposeMethod = {

//         callMethod: function (clazz, method, param, callback) {
//             var port = PrivateMethod.generatePort();
//             if (typeof callback !== 'function') {
//                 callback = null;
//             }
//             PrivateMethod.registerCallback(port, callback);
//             PrivateMethod.callNativeMethod(clazz, port, method, param);
//         },

        onComplete: function (port, result) {
            // PrivateMethod.onNativeComplete(port, result);
            var jsonStr=JSON.stringify(result);
            alert(jsonStr);
        }

    };
    for (var index in ExposeMethod) {
        if (ExposeMethod.hasOwnProperty(index)) {
            if (!Object.prototype.hasOwnProperty.call(RainbowBridge, index)) {
                RainbowBridge[index] = ExposeMethod[index];
            }
        }
    }
})();


