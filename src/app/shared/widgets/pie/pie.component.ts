import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
      borderWidth: 0,
      margin: [2,2,2,2],
      height: 250
  },
  title: {
   text: undefined
  },
  tooltip: {
    split: true,
    outside: true
  },
  legend: {
    enabled: false
  },
  xAxis:{
    labels: {
      enabled: false,
    },
    title: {
      text: null
    },
    startOnTick: false,
    endOnTick: false,
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    title: {
      text: null,
    }
  },
    series: [{
      data: [71, 78, 39, 66],
      type: "pie"
    }]
  };
  

  ngOnInit(): void {
  }

}
