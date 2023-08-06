"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function two_crystal_balls(breaks) {
    var jmpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (var j = 0; j < jmpAmount && breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
exports.default = two_crystal_balls;
