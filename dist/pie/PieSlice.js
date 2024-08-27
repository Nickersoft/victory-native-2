"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieSlice = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_skia_1 = require("@shopify/react-native-skia");
const useSlicePath_1 = require("./hooks/useSlicePath");
const PieSliceContext_1 = require("./contexts/PieSliceContext");
const PieSlice = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    const { slice } = (0, PieSliceContext_1.usePieSliceContext)();
    const path = (0, useSlicePath_1.useSlicePath)({ slice });
    return ((0, jsx_runtime_1.jsx)(react_native_skia_1.Path, Object.assign({ path: path, color: slice.color, style: "fill" }, rest, { children: children })));
};
exports.PieSlice = PieSlice;
