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
exports.PieSliceAngularInset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_skia_1 = require("@shopify/react-native-skia");
const useSliceAngularInsetPath_1 = require("./hooks/useSliceAngularInsetPath");
const PieSliceContext_1 = require("./contexts/PieSliceContext");
const PieSliceAngularInset = (props) => {
    const { angularInset, children } = props, rest = __rest(props, ["angularInset", "children"]);
    const { slice } = (0, PieSliceContext_1.usePieSliceContext)();
    const [path, insetPaint] = (0, useSliceAngularInsetPath_1.useSliceAngularInsetPath)({ slice, angularInset });
    if (angularInset.angularStrokeWidth === 0) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(react_native_skia_1.Path, Object.assign({ path: path, paint: insetPaint }, rest, { children: children })));
};
exports.PieSliceAngularInset = PieSliceAngularInset;
