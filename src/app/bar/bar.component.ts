import { Component, OnInit } from '@angular/core';
import { ChartDataSets} from 'chart.js';


import * as sample1 from './../../data/bar/sample1.json';
import * as sample2 from './../../data/bar/sample2.json'
import * as sample3 from './../../data/bar/sample3.json'
import * as sample4 from './../../data/bar/sample4.json'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public sample1:ChartDataSets[] = [];
  public sample2:ChartDataSets[] = [];
  public sample3:ChartDataSets[] = [];
  public sample4:ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
 
    this.sample1 = (sample1 as any).default;
    this.sample2 = (sample2 as any).default;
    this.sample3 = (sample3 as any).default;
    this.sample4 = (sample4 as any).default;
  }



}
