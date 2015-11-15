var cbus = {};

var xhr = function(url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function(e){
        callback(this.responseText, e);
    };
    oReq.open("get", url, true);
    oReq.send();
};

var colonSeparateDuration = function(num) { // in seconds
    if (typeof num == "number" && !(Number.isNaN || isNaN)(num)) {
        var minutes = Math.floor(num / 60);
        var seconds = Math.floor(num % 60);
        return "" + minutes + ":" + zpad(seconds, 2);
    } else {
        return "--:--";
    }
};

var zpad = function pad(n, width, z) { // by user Pointy on SO: stackoverflow.com/a/10073788
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

var mergeObjects = function(a, b){
    var result = {};

    for (var key in a) {
        result[key] = a[key];
    }
    for (var key in b) {
        result[key] = b[key];
    }

    return result;
};

window.AudioContext = window.AudioContext || window.webkitAudioContext;