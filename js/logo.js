logoText = ['DELTA'.split(''), 'FLIP'.split('')];

logoSettings = {
    size: 120,
    margin: 8,
    fontSize: 82,
    perspective: 450
};

makeObj = function(a) {
    var i, j, len1, o, v;
    o = {};
    for (i = j = 0, len1 = a.length; j < len1; i = ++j) {
        v = a[i];
        o['letter' + i] = a;
    }
    return o;
};

getSeq = function(a, reverse, random) {
    var i, j, len, len1, o, p, v;
    o = {};
    len = a.length;
    for (i = j = 0, len1 = a.length; j < len1; i = ++j) {
        v = a[i];
        if (reverse) {
            p = len - i - 1;
        } else if (random) {
            p = Math.floor(Math.random() * len);
        } else {
            p = i;
        }
        o['letter' + i] = a[p];
    }
    return o;
};

var cubeSet = new HexaFlip(document.getElementById('my-el'), makeObj(logoText[0]), logoSettings);
setInterval(function(){
    cubeSet.setValue(getSeq(logoText[0], false, Math.random() > 0.8 ? true:false ));
}, 1000);
