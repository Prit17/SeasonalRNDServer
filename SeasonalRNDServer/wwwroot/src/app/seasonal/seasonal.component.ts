import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import * as xlsx from "xlsx";
import * as moment from "moment";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Seasonal } from '../model';

@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css']
})
export class SeasonalComponent implements OnInit {

  Records:Seasonal[];
  dt: any;
  url:string="https://localhost:44325/api/Seasonal";
  constructor(private http: HttpClient) { Chart.register(...registerables) }

  ngOnInit(): void {
    this.dygraph1();
  }
dygraph1(){
   this.http.get(this.url).subscribe((res:any)=>{
     this.Records=res;
     console.log(this.Records);
   
   var h = this.Records.map(function (e: any) {
    return e.historicalData;
    console.log(e.Predicted)
  })
  var p = this.Records.map(function (e: any) {
    return e.predictedData;
    console.log(e.Predicted)
  })
  var e = this.Records.map(function (e: any) {
    console.log(e.events)
    return e.events;
  })
  
  var d = this.Records.map(function (e: any) {
 //   const date = moment(e.date).format('MM/DD/YYYY');
 //   console.log(date);
    return e.date;
  })
  const stackedLine = new Chart("Chart1", {
    type: 'line',

    data: {
      labels: d,
      datasets: [{
        label: 'Historical values from 01/06/2016 - 16/11/2018 ',
        // data:[44,80,102,201],
        data: h,
        backgroundColor: 'blue',
        borderColor:'blue',
      //  borderWidth:1.5
      },
      {
        label: 'Predicted values from 17/11/2018 - 19/08/2021 ',
        // data:[44,80,102,201],
        data: p,
        backgroundColor: 'red',
        borderColor:'red',
        //borderWidth:1.5
      },
      {
        label:'Event occured',
        data:e,
        backgroundColor: 'green',
        borderColor:'green',
      }],
    },
    options: {
      plugins:{
        datalabels:{
          color:"grey"
        }
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      }

    }

  })
   },
   (err) => console.log(err))
}
}
// dygraph2(){
//   const stackedLine = new Chart("Chart2", {
//     type: 'line',

//     data: {
//       labels: ["Historical","Predicted"],
//       datasets: [{
//         label: 'Historical',
//         // data:[44,80,102,201],
//         data: [12,25,34,48,68],
//         backgroundColor: 'blue',
//         borderColor:'blue',
//       //  borderWidth:1.5
//       },
//       {
//         label: 'Predicted',
//         // data:[44,80,102,201],
//         data: [68,75,82,94,98],
//         backgroundColor: 'red',
//         borderColor:'red',
//         //borderWidth:1.5
//       }],
//     },
//     options: {
//       plugins:{
//         datalabels:{
//           color:"grey"
//         }
//       },
//       scales: {
//         x: {
//           stacked: true
//         },
//         y: {
//           stacked: true
//         }
//       }

//     }

//   })
// }

// dygraph3(){
//   const stackedLine = new Chart("Chart3", {
//     type: 'bar',

//     data: {
//       labels: ["Historical","Predicted"],
//       datasets: [{
//         label: 'Profit',
//         // data:[44,80,102,201],
//         data: [65,70],
//         backgroundColor: 'blue',
//         borderColor:'blue',
//       //  borderWidth:1.5
//       },
//       {
//         label: 'Profit',
//         // data:[44,80,102,201],
//         data: [68,75],
//         backgroundColor: 'red',
//         borderColor:'red',
//         //borderWidth:1.5
//       }],
//     },
//     options: {
//       plugins:{
//         datalabels:{
//           color:"grey"
//         }
//       },
//       scales: {
//         x: {
//           stacked: true
//         },
//         y: {
//           stacked: true
//         }
//       }

//     }

//   })
// }

// dygraph4(){
//   const stackedLine = new Chart("Chart4", {
//     type: 'bubble',

//     data: {
//       labels: ["Historical","Predicted"],
//       datasets: [{
//         label: 'Historical',
//         // data:[44,80,102,201],
//         data: [
//          {x:10,y:10,r:3},
//          {x:15,y:15,r:3},
//         ],
//         backgroundColor: 'blue',
//         borderColor:'blue',
//       //  borderWidth:1.5
//       },
//       {
//         label: 'Predicted',
//         // data:[44,80,102,201],
//         data: [
//           {x:20,y:20,r:3},
//           {x:25,y:25,r:3},
//          ],
//         backgroundColor: 'red',
//         borderColor:'red',
//         //borderWidth:1.5
//       }],
//     },
//     options: {
//       indexAxis:'y',
//       plugins:{
//         datalabels:{
//           color:"grey"
//         }
//       },
    

//     }

//   })

