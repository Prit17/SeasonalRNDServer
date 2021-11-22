import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';

  ngOnInit() {
    this.barChart();
    this.lineChart();
    this.pieChart();
    this.bubbleChart();
  }
  barChart() {
    const myChart = new Chart("Chart1", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Votes (bar chart)',
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
            'rgba(255, 99, 132, 1)',
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
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  lineChart() {
    const stackedLine = new Chart("Chart2", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'Jun', 'July'],
        datasets: [{
          label: 'Dataset (Line Chart)',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor:'blue',
          borderColor: 'rgb(75, 192, 192)',
          
        }]
          
      },
          options: {
          scales: {
            y: {
              stacked: true
            }
          }
        }
  },
  )}
  pieChart(){
    const myChart = new Chart("Chart3", {
      type: 'doughnut',
      data : {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'Dataset (Doughnut Chart)',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
    })
  }
  bubbleChart(){
    const myChart = new Chart("Chart4", {
    type: 'bubble',
     data: {
      datasets: [{
        label: ' Dataset (Bubble Chart)',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    },
     options: {}
  })
}
}
