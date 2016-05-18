(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Hello ddfrom " + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSxrQkFBMEIsSUFBWTtJQUNsQyxNQUFNLENBQUMsa0JBQWlCLElBQU8sQ0FBQztBQUNwQyxDQUFDO0FBRmUsZ0JBQVEsV0FFdkIsQ0FBQTs7OztBQ0ZELHNCQUF5QixTQUFTLENBQUMsQ0FBQTtBQUVuQyxtQkFBb0IsT0FBZSxFQUFFLElBQVk7SUFDN0MsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUUsSUFBSSxDQUFFLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsQ0FBRSxVQUFVLEVBQUUsWUFBWSxDQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKCBuYW1lOiBzdHJpbmcgKSB7XG4gICAgcmV0dXJuIGBIZWxsbyBkZGZyb20gJHsgbmFtZSB9YDtcbn0iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XG5cbmZ1bmN0aW9uIHNob3dIZWxsbyggZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcgKSB7XG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGRpdk5hbWUgKTtcbiAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8oIG5hbWUgKTtcbn1cblxuc2hvd0hlbGxvKCBcImdyZWV0aW5nXCIsIFwiVHlwZVNjcmlwdFwiICk7XG4iXX0=
