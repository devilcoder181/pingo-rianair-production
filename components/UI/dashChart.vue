<template>
     <bar-chart :data="barChartData" :options="barChartOptions" :height="150" />
</template>
 
<script>
import BarChart from '~/plugins/chart'

export default {
  data() {
    return {
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        datasets: [
          {
            label: 'Enquiry Requests',
            data: [100, 150, 200, 300, 400, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Monthly Requestes'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        elements: {
            line: {
                fill: false,
                borderColor: '#3d50fa',
            },
            point: {
                backgroundColor: '#6374fb',
                hoverBackgroundColor: '#3d50fa',
                radius: 7,
                hoverRadius: 15,
            }
        }
      }
    }
  },
  components: {
    BarChart
  }
}

</script>