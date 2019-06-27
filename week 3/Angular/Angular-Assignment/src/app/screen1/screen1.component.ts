import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FilterService } from '../services/filter/filter.service'


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {
  selected = 'option2';
  team=null;
  data = [];
  selectedTeam:String="CSK";
  selectedCategory:String="Runs"
  dataset = []
  constructor(private _fliter: FilterService) {
   
  }
  ngOnInit() {
    // this.chart.removeSeries(0);
    this.buildChart("CSK","Runs")
  }

  buildChart(team,y) {
    this.dataset = this._fliter.getData(team, y)
    this.chart.removeSeries(0)
    this.chart2.removeSeries(0)
    this.chart3.removeSeries(0)
    this.chart4.removeSeries(0)
    this.chart.addSeries({
      type: 'bar',
      name: team,
      data: this.dataset
    }, true, true)
    this.chart2.addSeries({
      type: 'pie',
      name: team,
      data: this.dataset
    }, true, true)
    this.chart3.addSeries({
      type: 'column',
      name: team,
      data: this.dataset
    }, true, true)
    this.chart4.addSeries({
      type: 'line',
      name: team,
      data: this.dataset
    }, true, true)
  }
  chart = new Chart({

    title: {
      text: 'BarChart'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Category'
      }
    },
    xAxis: {
      categories: ['I','II','III','IV','V','VI','VII','VIII','IX','X' ],
      title:
      {
        text: 'seasons'
      }
    },

    credits: {
      enabled: true
    },
    colors:['#3db685'],
    series: [
      {
        type: 'bar',
        name: 'CSK',
        data: this.dataset
      }
    ]
  });


  chart2 = new Chart({

    title: {
      text: 'PieChart'
    },

    credits: {
      enabled: true
    },
    plotOptions:{
      pie:{
        innerSize:100,
        depth:45,
        allowPointSelect:true,
        cursor:'pointer',
        dataLabels:{
          enabled:true,
          format:'<b>Season {point.name}</b>: {point.percentage:.1f}%'
        }
      }
    },
    series: [
      {
        type: 'pie',
        data: this.dataset
      },

    ]
  });

  chart3 = new Chart({

    title: {
      text: 'ColumnChart'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Category'
      }
    },
    colors:['#3db685'],
    xAxis: {
      categories: ['I','II','III','IV','V','VI','VII','VIII','IX','X' ],
      title:
      {
        text: 'seasons'
      }
    },

    credits: {
      enabled: true
    },
    series: [
      {
        type: 'column',
        name: 'CSK',
        data: this.dataset
      }
    ]
  });
  chart4 = new Chart({

    title: {
      text: 'lineChart'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Category'
      }
    },
    colors:['#3db685'],
    xAxis: {
      categories: ['I','II','III','IV','V','VI','VII','VIII','IX','X' ],
      title:
      {
        text: 'seasons'
      }
    },

    credits: {
      enabled: true
    },
    series: [
      {
        type: 'column',
        name: 'CSK',
        data: this.dataset
      }
    ]
  });




  // add point to chart serie
  add() {
    console.log(this.team)
    this.chart.removePoint(0)
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  getDetails(team,y){
    console.log(team,y)
    this.buildChart(team,y)
  }
  

}
