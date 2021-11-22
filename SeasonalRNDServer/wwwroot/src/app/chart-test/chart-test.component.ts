import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import * as xlsx from "xlsx";
import * as moment from "moment";

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {

  transform: any;
  Records: any;
  dt: any;
  p: any = [];
  BorderColor: any;
  constructor(private http: HttpClient) { Chart.register(...registerables) }

  ngOnInit(): void {
    this.dygraph();
  }

  dygraph() {

    // this.http.get('./assets/sample1.csv', { responseType: 'text' }).subscribe(
    this.http.get('../assets/seasonal.xlsx', { responseType: 'blob' }).subscribe(
      (res: any) => {
        this.Records = res;
        console.log(this.Records);
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(res);
        fileReader.onload = async (e) => {
          var arrayBuffer: any = fileReader.result;
          var data = new Uint8Array(arrayBuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = xlsx.read(bstr, { type: "binary", cellDates: true });
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          this.Records = xlsx.utils.sheet_to_json(worksheet, { raw: true });
          console.log(this.Records);
          var p = this.Records.map(function (e: any) {
            return e.Predicted1;
            console.log(e.Predicted)
          })
          var p1 = this.Records.map(function (e: any) {
            return e.Predicted2;
            console.log(e.Predicted)
          })
          var n = this.Records.map(function (e: any) {
            return e.New1;
            console.log(e.Predicted)
          })
          var n1 = this.Records.map(function (e: any) {
            return e.New2;
            console.log(e.Predicted)
          })
          var ev = this.Records.map(function (e: any) {
            return e.Event;
            console.log(e.Predicted)
          })

          var d = this.Records.map(function (e: any) {
            const date = moment(e.Date).format("DD/MM/YYYY");
            return date;
            console.log(e.Predicted)
          })
          const stackedLine = new Chart("chart", {
            type: 'line',

            data: {
              labels: d,
              datasets: [{
                label: 'Predicted values from 01/06/2016 - 16/11/2018 ',
                // data:[44,80,102,201],
                data: p,
                backgroundColor: 'blue',
                borderColor:'blue',
              //  borderWidth:1.5
              },
              {
                label: 'Predicted values from 17/11/2018 - 19/08/2021 ',
                // data:[44,80,102,201],
                data: p1,
                backgroundColor: 'red',
                borderColor:'red',
                //borderWidth:1.5
              },
              {
                label: 'New values from 01/06/2016 - 16/11/2018 ',
                //  data:[46,90,104,205],
                data: n,
                backgroundColor: 'Orange',
                borderColor:'Orange',
                //borderWidth:1.5
              },
              {
                label: 'New values from 17/11/2018 - 19/08/2021 ',
                //  data:[46,90,104,205],
                data: n1,
                backgroundColor: 'grey',
                borderColor:'grey',
               // borderWidth:1.5
              },
              {
                label:"Event",
                data:ev,
                backgroundColor:"#00FFFF",
                pointBackgroundColor:"#00FFFF"
              }],


            },

            options: {
              events: ["mousemove",],
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

        }
      })
  }
}
//   check(obj:any){
// //     this.dt=obj.forEach((ele:any)=>{
// //       var dte='16/05/2019';
// //       if(ele>=dte){
// //         this.BackgroundColor='green';
// //       }
// //       else{
// //         this.BackgroundColor='blue';
// //       }
// //     return this.BackgroundColor;
// //     })
// //   }
// // }
//     for(var i=0;i<obj.length;i++){
//       var dte='16/05/2019';
//       if(obj[i]===dte){
//         this.BackgroundColor='green';
//         this.BorderColor='green';
//         return this.BackgroundColor,this.BorderColor;
//       }
//       else{
//       this.BackgroundColor='blue';
//       this.BorderColor='blue';
//       return this.BackgroundColor,this.BorderColor
//     }
//     //return this.BackgroundColor,this.BorderColor; 
//   }}}



// const dte=this.dt;
      // const t=this.transform;
      // var date=d.map(function(e:any){
      //   t.push(dte.transform(d,'dd-MM-yyyy'))
      //   return t;
      // })