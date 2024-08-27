"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePolarChartContext = exports.PolarChartProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PolarChartContext = (0, react_1.createContext)(undefined);
const PolarChartProvider = (props) => {
    const { children, data, canvasSize, labelKey, valueKey, colorKey } = props;
    return ((0, jsx_runtime_1.jsx)(PolarChartContext.Provider, { value: {
            data,
            canvasSize,
            labelKey,
            valueKey,
            colorKey,
        }, children: children }));
};
exports.PolarChartProvider = PolarChartProvider;
const usePolarChartContext = () => {
    const context = (0, react_1.useContext)(PolarChartContext);
    if (context === undefined) {
        throw new Error("usePolarChartContext must be used within a PolarChartProvider");
    }
    return context;
};
exports.usePolarChartContext = usePolarChartContext;
