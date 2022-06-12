import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';
// import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  type:string='all';

  lineChartLabels:any[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  
  allDataCounter:any;
  todayDataCounter:any;
  constructor(public root:SharedService, private router: Router) { }

  ngOnInit() {
   
  }
    
  ngAfterViewInit() {


  }


}
