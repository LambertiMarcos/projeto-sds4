
import Chart from "react-apexcharts";


const LineChart = () => {

    const state = {

        options: {
            chart: {
                id: "basic-bar",
                fontFamily: 'Helvetica, Arial, sans-serif',
                zoom: {
                    enabled: true
                },
            },
            xaxis: {
                categories: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun']
            }

        },

        series: [
            {
                name: "Visitados",
                data: [168, 355, 197, 201, 244, 169],
                borderWidth:1,
                backgroundColor:['#546E7A'],
            },

            {
                name: "Fechados",
                data: [118, 305, 147, 200, 204, 149],
                borderWidth:1,
                backgroundColor:['#E91E63'],
            }
        ],
        color:['#546E7A']
    };

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height="220"
            //width="400"

        />
    );

}
export default LineChart;
