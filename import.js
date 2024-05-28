"use strict";
// Function import 
// named import syntax 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("./export");
(0, export_1.add)(12, 5);
const export_2 = require("./export");
console.log(export_2.fName);
// default import syntax
const export_3 = __importDefault(require("./export"));
console.log(export_3.default);
