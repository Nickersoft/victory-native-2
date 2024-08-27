"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePieSliceContext = exports.PieSliceProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PieSliceContext = (0, react_1.createContext)(undefined);
const PieSliceProvider = ({ children, slice: _slice, }) => {
    return ((0, jsx_runtime_1.jsx)(PieSliceContext.Provider, { value: { slice: _slice }, children: children }));
};
exports.PieSliceProvider = PieSliceProvider;
const usePieSliceContext = () => {
    const context = (0, react_1.useContext)(PieSliceContext);
    if (context === undefined) {
        throw new Error("usePieSliceContext must be used within a PieSliceProvider");
    }
    return context;
};
exports.usePieSliceContext = usePieSliceContext;
