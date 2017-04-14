"use strict"

$.fn.getClassNames = function(){
    var name = this.attr("className");
    if(name){
        return name.split(" ");
    }
    else{
        return [];
    }
}