"use strict";
// Modules 
Object.defineProperty(exports, "__esModule", { value: true });
exports.fName = exports.add = void 0;
// Named export 
// Example 1 with function
function add(num1, num2) {
    console.log(num1 + num2);
}
exports.add = add;
// Example 2 with variable 
exports.fName = "Areeba";
// add(12 , 25)
// Default export
let lName = "Bano";
exports.default = lName;
