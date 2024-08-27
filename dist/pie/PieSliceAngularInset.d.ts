import { type Color, type PathProps } from "@shopify/react-native-skia";
export type PieSliceAngularInsetData = {
    angularStrokeWidth: number;
    angularStrokeColor: Color;
};
type AdditionalPathProps = Partial<Omit<PathProps, "color" | "path">>;
type PieSliceAngularInsetProps = {
    angularInset: PieSliceAngularInsetData;
} & AdditionalPathProps;
export declare const PieSliceAngularInset: (props: PieSliceAngularInsetProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
