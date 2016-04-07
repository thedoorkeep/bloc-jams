function forEach(array, callback) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}