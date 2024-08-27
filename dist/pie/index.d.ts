import { type PieSliceData } from "./PieSlice";
declare const Pie: {
    Chart: (props: {
        children?: (args: {
            slice: PieSliceData;
        }) => import("react").ReactNode;
        innerRadius?: number | string;
        circleSweepDegrees?: number;
        startAngle?: number;
    }) => import("react/jsx-runtime").JSX.Element[];
    Slice: (props: Partial<Omit<import("@shopify/react-native-skia").PathProps, "path" | "color">>) => import("react/jsx-runtime").JSX.Element;
    SliceAngularInset: (props: {
        angularInset: import("./PieSliceAngularInset").PieSliceAngularInsetData;
    } & Partial<Omit<import("@shopify/react-native-skia").PathProps, "path" | "color">>) => import("react/jsx-runtime").JSX.Element | null;
};
export { Pie, type PieSliceData };
