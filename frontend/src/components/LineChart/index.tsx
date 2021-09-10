
import Chart from "react-apexcharts";

const LineChart = () => {

    const state = {

        options: {
            chart: {
                id: "basic-bar",
                fontFamily: 'Helvetica, Arial, sans-serif',
                colors: ['#546E7A', '#E91E63']
            },
            xaxis: {
                categories: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun']
            }

        },

        series: [
            {
                name: "Visitados",
                data: [168, 355, 197, 201, 244, 169]
            },
            {
                name: "Fechados",
                data: [118, 305, 147, 200, 204, 149]
            }
        ]
    };

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height="240"
            width="400"

        />
    );

}
export default LineChart;
