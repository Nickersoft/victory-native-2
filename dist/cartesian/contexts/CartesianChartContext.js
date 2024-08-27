"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCartesianChartContext = exports.CartesianChartProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CartesianChartContext = (0, react_1.createContext)(undefined);
const CartesianChartProvider = (props) => {
    const { children, xScale, yScale } = props;
    return ((0, jsx_runtime_1.jsx)(CartesianChartContext.Provider, { value: {
            xScale,
            yScale,
        }, children: children }));
};
exports.CartesianChartProvider = CartesianChartProvider;
const useCartesianChartContext = () => {
    const context = (0, react_1.useContext)(CartesianChartContext);
    if (context === undefined) {
        throw new Error("useCartesianChartContext must be used within a CartesianChartProvider");
    }
    return context;
};
exports.useCartesianChartContext = useCartesianChartContext;
