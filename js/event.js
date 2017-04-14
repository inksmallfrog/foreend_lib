// Javascript File
//  Filename: event.js
//   Created: 2017-02-26 11:00:33
//      Desc: save js code about event model
//    Author: inksmallfrog, inksmallfrog@gmail.com
//   Company: InkLove

function stopEventBubble(event){
    if(event.stopPropagation){
        //others
        event.stopPropagation();
    }
    else{
        //IE
        event.cancelBubble = true;
    }
}

function addListener(obj, event, f, casecade_down){
    if(!obj) return false;
    if(obj.addEventListener){
        //others
        obj.addEventListener(event, f, casecade_down);
    }
    else if(obj.attachEvent){
        //IE
        obj.attachEvent("on" + event, f);
    }
    else{
        //Use Level 0
        obj["on" + event] = f;
        return false;
    }
}

function removeListener(obj, event, f, casecade_down){
    if(!obj) return false;
    if(obj.removeEventListener){
        obj.removeEventListener(event, f, casecade_down);
    }
    else if(obj.detachEvent){
        obj.detachEvent("on" + event, f);
    }
    else{
        //Use level 0
        return false;
    }
}

function stopEventBubble_form(event){
    if(event.preventDefault){
        //others
        event.preventDefault();
        event.stopPrapagation();
    }
    else{
        //IE
        event.returnValue = false;
        event.cancelBubble = true;
    }
}
