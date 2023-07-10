import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly Placement Evaluation 2022-2023',
          align: 'center'
      },
      subtitle: {
          text: 'Luminar Technolab',
          align: 'center'
      },
      xAxis:{
        categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number of Placements'
          }
      },
      credits:{
        enabled:false
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Mearn',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214,15483, 13196, 17514]
      }, {
          name: 'Python',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,5631, 5547, 5009]
  
      }, {
          name: 'Big Data',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,4146, 4311, 4903]
      }, {
          name: 'Testing',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,3087, 4593, 1050]
  
      }, {
          name: '.Net',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,2044, 2176, 2586]
      }]
  }
  HC_exporting(Highcharts);
  }
}
