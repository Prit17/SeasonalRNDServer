import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as xlsx from "xlsx";
import { Chart, registerables } from 'chart.js';
import Dygraph from 'dygraphs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  predictions: any;
  new: any;

  chart: any;
  constructor(private http: HttpClient) { Chart.register(...registerables) }
  Records: any=[];
  Predicted: any;
  date: any;
  New: any;
  ngOnInit(): void {

    this.dygraph();
  }
  dygraph() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token' 
    })
    this.http.get('./assets/sample1.csv', { responseType: 'text' }).subscribe(
      (res: any) => {
        this.Records = res;
        console.log(this.Records);
       const g = new Dygraph(
          document.getElementById("chart")!, res,
          {
            highlightSeriesOpts:{},
            colors: ['blue', 'orange'],
             showRangeSelector: true,
            valueRange: [20, 60],
            series: {
              'Date':{
                
              },
              'Predicted': {
                strokePattern: null,
                drawPoints: true,
                pointSize: 1,
              },
              'New': {
                strokePattern: null,
                strokeWidth: 2.6,
                drawPoints: true,
                pointSize: 1,
              },
            }
            
          },
        )
       g.ready(function(){
         g.setAnnotations([
           {
             series:"Date",
             x:"42615",
             shortText:"L",
             text:"gggh"
           }
         ])
       })
      }, (err) => console.log(err))
  }

}
      // console.log(res);
      // let fileReader = new FileReader();
      //     fileReader.readAsArrayBuffer(res);
      //     fileReader.onload = async (e) => {
      //         var arrayBuffer: any = fileReader.result;
      //         var data = new Uint8Array(arrayBuffer);
      //         var arr = new Array();
      //         for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      //         var bstr = arr.join("");
      //         var workbook = xlsx.read(bstr, { type: "binary", cellDates: true });
      //         var first_sheet_name = workbook.SheetNames[0];
      //         var worksheet = workbook.Sheets[first_sheet_name];
      //         //this.Records = xlsx.utils.sheet_to_json(worksheet, { raw: true });
      //         // console.log(this.Records);
      //         // this.sample();
      //         this.Records=await this.ConvertToCSV(xlsx.utils.sheet_to_json(worksheet, { raw: true }))

//               this.chart = new Dygraph(

//                      document.getElementById("chart")!,res,
//                      {

//                        colors: [ 'blue','orange'],
//                     //   showRangeSelector: true,
//                        valueRange: [20,60],
//                        series: {

//                          'Predicted': {
//                            strokePattern: null,
//                            drawPoints: true,
//                            pointSize: 4,
//                          },
//                          'New': {
//                            strokePattern: null,
//                            drawPoints: true,
//                            pointSize: 4,
//                          },
//                        }
//                      },
//                      )

//     },(err)=>console.log(err))
//   }

//  async ConvertToCSV(objArray:any) {
//     var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
//     var str = '';
//     var row = "";

//     for (var index in objArray[0]) {
//       row += index + ',';
//     }
//     row = row.slice(0, -1);
//     str += row + '\r\n';

//     for (var i = 0; i < array.length; i++) {
//       var line = '';
//       for (var index in array[i]) {
//         if (line != '') line += ','

//         line += array[i][index];
//       }
//       str += line + '\r\n';
//     }
//     return await str;
//   }
//   }

    // this.http.get('../assets/Book2.xlsx', { responseType: 'blob' }).subscribe(
  //      (res:any) => {
  //       console.log(res);
        // let data;
        // data=res;
        // if(typeof data==='object') return data;
        // if(typeof data==='string') return JSON.parse(data);
        // data.forEach((element:any)=>{
        //   element.Date;
        //   element.Predicted;
        //   element.New;
        // })
    //     this.Records = '../assets/Book2.xlsx';
    //     this.chart = new Dygraph(
    //      document.getElementById("chart")!,this.Records,
    //      {
    //        colors: ['green', 'blue',],
    //        showRangeSelector: true,
    //        valueRange: [20,60],
    //        series: {
    //          'Predicted': {
    //            strokePattern: null,
    //            drawPoints: true,
    //            pointSize: 1,
    //          },
    //          'New': {
    //            strokePattern: null,
    //            drawPoints: true,
    //            pointSize: 3.5,
    //          },
    //        }
    //      },
    //      )
    //  })}
  // graph(){
  //   const stackedLine = new Chart("chart", {
  //     type: 'line',
  //     data: {
  //        labels: ['Predicted','New'],
  //        datasets: [{
  //       label: 'Predict',
  //     // data:[44,80,102,201],
  //       data: this.data.Predicted,
  //       backgroundColor:'blue',
  //       borderColor: 'rgb(75, 192, 192)',
  //     },{
  //       label: 'New',
  //     //  data:[46,90,104,205],
  //       data: this.data.New,
  //       backgroundColor:'Orange',
  //       borderColor: 'rgb(75, 192, 192)',
  //     }]

  //   },
  //   options: {
  //     scales: {
  //       x:{
  //        stacked:true
  //       },
  //       y: {
  //         stacked: true
  //       }
  //     }
  //   }
  //   })
  //   sample(){
  //     var p:number=0;
  //     var n:number=0;
  //     this.Records.foreach((ele:any)=>{

  //       var obj:any;
  //       obj.Predicted=ele.Predicted;
  //       obj.New=ele.New;
  //       this.data.push(obj);
  //       this.graph();
  //     })
  //    }