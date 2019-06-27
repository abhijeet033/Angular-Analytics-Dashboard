import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {
  showcard=false;
 word_count=null;
 vowel_count=null;
 article_count=null;
 lrg_count=null;
 sml_count=null;
 dataset = [];
  constructor() { }

  ngOnInit() {
  }
  checkDetails(data) {
    
    if(data.length>0){
      this.showcard=true;
      console.log(data)
      this.dataset=[]
      // console.log(this.wordCount(data))
      this.word_count=this.wordCount(data)
      this.vowel_count=this.vowelCount(data)
      this.article_count=this.articleCount(data)
      this.lrg_count=this.largestWord(data)
      this.sml_count=this.smallestWord(data)
      this.dataset.push(this.word_count);
      this.dataset.push(this.vowel_count);
      this.dataset.push(this.article_count);
      this.dataset.push(this.lrg_count);      
      this.dataset.push(this.sml_count);
      console.log(this.dataset);
      this.chart.removeSeries(0);
    this.chart.addSeries({
      type: 'column',
      name: 'String Analysis',
      data: this.dataset
    }, true, true)
    }
  
  }

  wordCount(e): number {

    return e.split(" ").length
  }

  vowelCount(str: String) {
    let arr = Array.from(str)
    var count = 0;
    arr.forEach(element => {
      element = element.toLowerCase();
      if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
        count++;
      }

    })
    return count
  }

  articleCount(str: String) {

    var article = str.split(" ").filter(a => {
      a = a.toLowerCase()
      if (a == 'a' || a == 'an' || a == 'the') {
        return a
      }
    }).length
    return article
  }

  largestWord(str: String) {

    var arr = Array.from(str.split(" "));
    var largest = arr.filter(element=>{
        return element.toLowerCase()!="a" && element.toLowerCase()!="an" && element.toLowerCase()!="the"
    })
    if(largest.length>0){
      var largest_len=largest.reduce((a, b) => {
        return a.length >= b.length ? a : b
          })
    }else{
     return 0
    }
     
    return largest_len.length
  }
  

  smallestWord(str: String) {

    var arr = Array.from(str.split(" "));
    var smallest = arr.filter(element=>{
        return element.toLowerCase()!="a" && element.toLowerCase()!="an" && element.toLowerCase()!="the"
    })
    if(smallest.length>0){
      var smallest_len=smallest.reduce((a, b) => {
        return a.length <= b.length ? a : b
          })
    }else{
     return 0
    }
    return smallest_len.length
  }

  chart = new Chart({

    title: {
      text: 'ColumnChart'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Count'
      }
    },
    xAxis: {
      categories: [
        'Word Count',
        'Vowel Count',
        'Article Count',
        'Largest Word Length',
        'Smallest Word Len'
      ],
      title:
      {
        text: 'Parameters'
      }
    },
    colors:['#3db685'],
    credits: {
      enabled: true
    },
    series: [
      {
        type: 'column',
        name: 'String Analysis',
        data:this.dataset
      }
    ]
  });

  

}
