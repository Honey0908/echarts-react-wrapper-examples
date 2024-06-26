export const basicLineChartCodeSnippets = `
import { EChartsReact, EChartsOption } from 'echarts-wrapper-react';

const BasicLineChart = () => {
    const option: EChartsOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
            },
        ],
    };
    
    return <EChartsReact option={option} />;
};

export default BasicLineChart;
`;
