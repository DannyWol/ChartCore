<template>
	<canvas ref="myChart" class="app"></canvas>
</template>

<script>
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

export default {
	name: "ChartOne",
    data() {
        return {
	        config: {
		        type: 'line',
		        /** 해당 데이터 */
		        data: {
			        /** Chart Line별 명칭*/
			        labels: [],
			        datasets: [{
				        label: '',
				        backgroundColor: 'rgb(255, 99, 132)',
				        borderColor: 'rgb(255, 99, 132)',
				        data: []
			        }]
		        },
		        options: {}
	        },
	        style: {

	        },
        }
    },
    created() {
        this.config.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June',],
            datasets: [{
	            label: 'My First dataset',
	            backgroundColor: 'rgb(255, 99, 132)',
	            borderColor: 'rgb(255, 99, 132)',
	            data: [0, 10, 5, 2, 20, 30, 45],
            }]
		};
	},
	mounted() {
		const chart = this.$refs.myChart;

		/** Draw Chart */
        new Chart(chart, this.config);
    }
}
</script>

<style scoped>
.app {
	width: 400px;
	height: 400px;
	border: 1px solid black;
	border-radius: 20px;
}
</style>