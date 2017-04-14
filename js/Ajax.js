/*
* @Author: inksmallfrog
* @Date:   2017-03-08 06:58:20
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-03-08 07:08:49
*/

'use strict';
function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
                catch(e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
                catch(e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
                catch(e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}