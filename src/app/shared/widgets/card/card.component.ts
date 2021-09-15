import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label = "";
  @Input() total = "";
  @Input() percentage = "";
  constructor() { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
      borderWidth: 0,
      margin: [2,2,2,2],
      height: 60
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
      type: 'line'
    }]
  };

  ngOnInit(): void {
  }

}
