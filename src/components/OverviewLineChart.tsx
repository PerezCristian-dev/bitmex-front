import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Legend, Filler, Tooltip } from 'chart.js';
import { DashChartPropsI } from '../interfaces/app.interface';
import { useMemo } from "react";


export const OverviewLineChart = (props: DashChartPropsI) => {

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Filler, Tooltip)

    const { data: { datasets, labels }, customStyle, customOptions } = props;

    let datasetsDefaultConfig = {
        tension: 0.1,
        borderWidth: 2,
        fill: "start",
        borderColor: "#798bff",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 3,
    }

    const options = useMemo(() => ({
        ...(customOptions) ? customOptions : {},
        plugins: {
            legend: {
                display: false,
                labels: {
                    boxWidth: 30,
                    padding: 20,
                    fontColor: '#6783b8'
                }
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context: any) => {
                        let _context = context;
                        let label = '';
                        if (_context.parsed.y !== null) label = `${_context.parsed.y} BTC`
                        return label;
                    }
                },
                backgroundColor: '#eff6ff',
                titleFont: { size: 13 },
                titleColor: "#6783b8",
                titleMarginBottom: 6,
                bodyColor: '#9eaecf',
                bodyFont: { size: 12 },
                bodySpacing: 4,
                padding: 10,
                footerMarginTop: 0,
                displayColors: false
            },
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                display: true,
                stacked: false,
                min: 100,
                ticks: {
                    font: { size: 11 },
                    color: "#9eaecf",
                    padding: 10,
                    stepSize: 3000,
                    callback: function callback(value: any, _index: any, _ticks: any) {
                        return '$ ' + value;
                    },
                },
                grid: {
                    color: "rgb(82, 100, 132, 0.2)",
                    tickLength: 0,
                    zeroLineColor: "rgb(82, 100, 132, 0.2)",
                }
            },
            x: {
                display: true,
                stacked: false,
                reverse: false,
                ticks: {
                    font: { size: 9 },
                    color: "#9eaecf",
                    source: 'auto',
                    padding: 10,
                },
                grid: {
                    color: "transparent",
                    tickLength: 0,
                    zeroLineColor: 'transparent'
                }
            }
        },
    }), [customOptions])

    return (
        <Line
            options={options}
            {...(customStyle) && { style: customStyle }}
            data={{ labels, datasets: datasets.map((dataset) => ({ ...datasetsDefaultConfig, ...dataset })) }}
        />
    )
}
