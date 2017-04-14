/*
* @Author: inksmallfrog
* @Date:   2017-03-08 07:19:55
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-03-08 07:31:08
*/

'use strict';
var clone = (function(){
    var getType = function(data){
        if(typeof data == "undefined") return "undefined";
        if(typeof data == "null") return "null";
        return Object.prototype.toString.call(data).splice(8, -1);
    }
    var refrences = [];
    var handlers = {
        "RegExp" : function(reg){
            var flags = "";
            flags += reg.global? "g" : "";
            flags += reg.multiline? "m" : "";
            flags += reg.ignorecase? "i" : "";
            return new RegExp(reg.source, flags);
        },
        "Date" : function(date){
            return new Date(date.getTime());
        },
        "Array" : function(arr, shallow){
            var newArr = [];
            for(int i = 0; i < arr.length; ++i){
                if(shallow) newArr[i] = arr[i];
                else{
                    if(refrences.indexOf(arr[i]) != -1) continue;
                    var handle = handlers[getType(arr[i])];
                    if(handle){
                        refrences.push(arr[i]);
                        newArr[i] = handle(arr[i], shallow);
                    }else{
                        newArr[i] = arr[i];
                    }
                }
            }
        },
        "Object" : function(obj, shallow){
            var newObj = {};
            for(prop in obj){
                if(obj.hasOwnProperty(prop)){
                    if(shallow) newObj.prop = obj.prop;
                    else{
                        if(refrences.indexOf(obj.prop) != -1) continue;
                        var handle = handlers[getType(obj.prop)];
                        if(handle){
                            refrences.push(obj.prop);
                            newObj[i] = handle(obj.prop, shallow);
                        }else{
                            newObj[i] = obj[i];
                        }
                    }
                }
            }
        }
    }
    return function(data, shallow){
        var handle = handlers[getType(data)];
        if(handle) handle(data, shallow);
        else return data;
    }
}());