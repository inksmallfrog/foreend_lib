/*
* @Author: inksmallfrog
* @Date:   2017-03-08 06:50:22
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-04 16:30:34
*/

'use strict';
function getElementsByClass(node, className){
    if(node.getElementsByClass) return node.getElementsByClass(className);
    var results = [];
    var elems = node.getElementsByTagName("*");
    for(var i = 0; i < elems.length; ++i){
        if(elems[i].className.indexOf(className) != -1){
            results[results.length] = elems[i];
        }
    }
    return results;
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.append(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function lastChildElement(node){
    var childElements = node.getElementsByTags("*");
    if(childElements.length > 0) return childElements[childElements.length - 1];
    else return null;
}

function getNextElement(node){
    var nextNode = node.nextSibling;
    if(nextNode){
        if(nextNode.nodeType == 1) return nextNode;
        else return getNextElement(nextNode);
    }else{
        return null;
    }
}

function addClass(node, new_class){
    node.className = node.className ? (node.className + " " + new_class) : new_class
}

function removeClass(node, removed_class){
    node.className = node.className.split(" ").filter(function(c){return c != removed_class;});
}

function windowSize(){
    var width = 0, height = 0;
    if(!window.innerWidth){
        width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
        height = (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight);
    }
    else{
        width = window.innerWidth;
        height = window.innerHeight;
    }
    return {width: width, height: height};
}

function elementSize(element){
    var width = 0, height = 0;
    if(!element.getBountdingClientRect){
        //Do something
        return {width:width, height:height};
    }
    var rect = element.getBoundingClientRect();
    width = rect.width ? rect.width : rect.right - rect.left;
    height = rect.height ? rect.height : rect.bottom - rect.top;
    return {width:width, height:height};
}

function addFuncs2Element(){
    Element.prototype.getElementsByClass = function(className){
        if(this.getElementsByClass) return this.getElementsByClass(className);
        var results = [];
        var elems = this.getElementsByTagName("*");
        for(var i = 0; i < elems.length; ++i){
            if(elems[i].className.indexOf(className) != -1){
                results[results.length] = elems[i];
            }
        }
        return results;
    }
    Element.prototype.addClass = function(new_class){
        this.className = this.className ? (this.className + " " + new_class) : new_class
    }
    Element.prototype.removeClass = function(old_class){
        this.className = this.className.split(" ").filter(function(c){return c != removed_class;});
    }
    Element.prototype.nextElement = function(){
        var nextNode = this.nextSibling;
        if(nextNode){
            if(nextNode.nodeType == 1) return nextNode;
            else return nextNode.nextElement();
        }else{
            return null;
        }
    }
    Element.prototype.size = function(){
        var width = 0, height = 0;
        if(!this.getBountdingClientRect){
            //Do something
            return {width:width, height:height};
        }
        var rect = this.getBoundingClientRect();
        width = rect.width ? rect.width : rect.right - rect.left;
        height = rect.height ? rect.height : rect.bottom - rect.top;
        return {width:width, height:height};
    }
    Element.prototype.hide = function(){
        this.style.display = "none";
        this.setAttribute('aria-hidden', 'true');
    }
    Element.prototype.show = function(disType){
        this.style.display = disType;
        this.setAttribute('aria-hidden', 'false');
    }
}