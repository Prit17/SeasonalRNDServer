import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from "primeng/button";
import { SplitterModule } from "primeng/splitter";
import { AppComponent } from './default/app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule} from '@angular/common/http';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { DatePipe} from '@angular/common';
import {Chart} from 'chart.js';
import { SeasonalComponent } from './seasonal/seasonal.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChartTestComponent,
    SeasonalComponent
  ],
  imports: [
    BrowserModule,ButtonModule,SplitterModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [SeasonalComponent]
})
export class AppModule { }
