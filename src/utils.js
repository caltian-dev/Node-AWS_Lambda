"use strict";
exports.__esModule = true;
exports.flattenObject = void 0;
/**
 * @param ob Object                 The object to flatten
 * @param prefix String (Optional)  The prefix to add before each key, also used for recursion
 **/
function flattenObject(ob, prefix, result) {
    if (prefix === void 0) { prefix = ""; }
    if (result === void 0) { result = {}; }
    // Preserve empty objects and arrays, they are lost otherwise
    if (prefix &&
        typeof ob === "object" &&
        ob !== null &&
        Object.keys(ob).length === 0) {
        result[prefix] = Array.isArray(ob) ? [] : {};
        return result;
    }
    prefix = prefix ? "".concat(prefix, ".") : "";
    for (var i in ob) {
        if (Object.prototype.hasOwnProperty.call(ob, i)) {
            if (typeof ob[i] === "object" && ob[i] !== null) {
                // Recursion on deeper objects
                flattenObject(ob[i], prefix + i, result);
            }
            else {
                result[prefix + i] = ob[i];
            }
        }
    }
    return result;
}
exports.flattenObject = flattenObject;
