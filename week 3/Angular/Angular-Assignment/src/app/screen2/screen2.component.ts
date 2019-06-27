import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter/filter.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {
 
  dataset = [];
  min=0;
  max=0
  selectedTeam:String="CSK";
  selectedCategory:String="Runs"
  constructor(private _filter:FilterService) { }

  ngOnInit() {
    this.buildChart("CSK","Runs")
    setInterval(()=>{
      this.add()
    },1500)
  }
  buildChart(team,y) {
    this.dataset = this._filter.getData(team, y)
   
    this.min=Math.min(this.dataset[6].y,this.dataset[8].y)
    this.max=Math.max(this.dataset[6].y,this.dataset[8].y)
    this.chart.removeSeries(0)
    this.chart.addSeries({
      type: 'line',
      name: team,
      data: this.dataset
    }, true, true)
    this.chart2.removeSeries(0)
    this.chart2.addSeries({
      type: 'area',
      name: team,
      data: this.dataset
    }, true, true)

  }
  chart = new Chart({

    title: {
      text: 'LineChart'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Category'
      }
    },
    colors:['#3db685'],
    plotOptions:{
      series:{
        pointStart:1,
        pointInterval:1,
      }
    },
    xAxis: {
      //  categories: ['I','II','III','IV','V','VI','VII','VIII','IX','X' ],
      // min:1,
      title:
      {
        text: 'seasons'
      },
      tickInterval:1
    },

    credits: {
      enabled: true
    },
    series: [
      {
        type: 'line',
        name: 'CSK',
        data: this.dataset
      }
    ]
  });

  chart2 = new Chart({

    title: {
      text: 'AreaChart'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Category'
      }
    },
    colors:['#3db685'],
    plotOptions:{
      'area':{
        pointStart:1,
        pointRange:1
      }
    },
    xAxis: {
      //  categories: ['I','II','III','IV','V','VI','VII','VIII','IX','X' ],
      // min:1,
      title:
      {
        text: 'seasons'
      },
      tickInterval:1
    },

    credits: {
      enabled: true
    },
    series: [
      {
        type: 'line',
        name: 'CSK',
        data: this.dataset
      }
    ]
  });
 
  add() {
    this.chart.removePoint(0)
   
   
    this.chart.addPoint(Math.floor(Math.random() *this.max)+this.min);
    this.chart2.removePoint(0)
    this.chart2.addPoint(Math.floor(Math.random() * this.max)+this.min);
  }
  getDetails(team,y){
    console.log(team,y)
    this.buildChart(team,y)
  }

}
