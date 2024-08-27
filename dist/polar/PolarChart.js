"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarChart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_1 = require("react-native");
const PolarChartContext_1 = require("./contexts/PolarChartContext");
const PolarChartBase = (props) => {
    const { containerStyle, canvasStyle, children, onLayout, hasMeasuredLayoutSize, canvasSize, } = props;
    const { width, height } = canvasSize;
    const ctx = (0, PolarChartContext_1.usePolarChartContext)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.baseContainer, containerStyle], children: (0, jsx_runtime_1.jsx)(react_native_skia_1.Canvas, { onLayout: onLayout, style: react_native_1.StyleSheet.flatten([
                styles.canvasContainer,
                hasMeasuredLayoutSize ? { width, height } : null,
                canvasStyle,
            ]), children: (0, jsx_runtime_1.jsx)(PolarChartContext_1.PolarChartProvider, Object.assign({}, ctx, { canvasSize: canvasSize, children: children })) }) }));
};
const PolarChart = (props) => {
    const { data, labelKey, colorKey, valueKey } = props;
    const [canvasSize, setCanvasSize] = React.useState({ width: 0, height: 0 });
    const [hasMeasuredLayoutSize, setHasMeasuredLayoutSize] = React.useState(false);
    const onLayout = React.useCallback(({ nativeEvent: { layout } }) => {
        setHasMeasuredLayoutSize(true);
        setCanvasSize(layout);
    }, []);
    return ((0, jsx_runtime_1.jsx)(PolarChartContext_1.PolarChartProvider, { data: data, labelKey: labelKey.toString(), colorKey: colorKey.toString(), valueKey: valueKey.toString(), canvasSize: canvasSize, children: (0, jsx_runtime_1.jsx)(PolarChartBase, Object.assign({}, props, { onLayout: onLayout, hasMeasuredLayoutSize: hasMeasuredLayoutSize, canvasSize: canvasSize })) }));
};
exports.PolarChart = PolarChart;
const styles = react_native_1.StyleSheet.create({
    baseContainer: {
        flex: 1,
    },
    canvasContainer: {
        flex: 1,
    },
});
