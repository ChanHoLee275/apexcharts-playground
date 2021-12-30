export default interface LineChartProps {
    figureNumber: number;
    names: string[];
    data: { [key: string]: number[] };
    categories: string[] | number[] | Date[];
    width?: number | string;
    height?: number | string;
}
