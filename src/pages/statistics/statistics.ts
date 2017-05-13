import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { RhrinfoListPage } from '../rhrinfo-list/rhrinfo-list';
import { RhrEntries } from '../../providers/rhr-entries';


/**
 * Generated class for the Statistics page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class Statistics {
rhrEntries:any=[];
rhrinfoListPage=RhrinfoListPage;

 @ViewChild('barCanvas') barCanvas;
 /** @ViewChild('doughnutCanvas') doughnutCanvas;*/
    @ViewChild('lineCanvas') lineCanvas;
 
    barChart: any;
   /** doughnutChart: any;*/
    lineChart: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public rhrService: RhrEntries) {
 
  }

  
  ionViewDidEnter() {
 /**
        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        }); */
 
      /**  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        }); */

        var options = {
 
            type: 'line',
            data: {
                labels: [], // dates
                datasets: [
                    {
                        label: "RHR beats/min",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "#f53d3d",
                        borderColor: "#f53d3d",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#f53d3d",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#f53d3d",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [],
                        spanGaps: false,
                    }
                ]
            }
 
        };

        for(var i = this.rhrService.data[0].entries.length-1; i >= 0; --i){
            var date = new Date(this.rhrService.data[0].entries[i].day*1000);
            var date_str = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
            options.data.labels.push(date_str);
            options.data.datasets[0].data.push(this.rhrService.data[0].entries[i].value);
        }
 
        this.lineChart = new Chart(this.lineCanvas.nativeElement, options);
 
    }
 
 
}
