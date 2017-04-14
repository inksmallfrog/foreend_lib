/*
* @Author: inksmallfrog
* @Date:   2017-04-04 16:09:25
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-04 16:13:27
*/

'use strict';
function createOverlay(){
    var overlay = document.getElementById('overlay');
    if(overlay) return overlay;
    overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    overlay.class = "overlay";
    document.append(overlay);
    return overlay;
}

function destroyOverlay(){
    var overlay = document.getElementById('overlay');
    overlay.parentNode.removeChild(overlay);
}