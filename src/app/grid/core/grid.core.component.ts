import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-grid',
  template: `<div class="row">
  <div class="col" *ngFor="let color of randomColors; let i = index;">
  <div class="display" [style.background-color]="color" (click)="clickHandle(rowCount, i)">
   Row:{{rowCount + 1}}  Col:{{i + 1}}
  </div>
</div>

  </div>
  `,
  styleUrls: ['./../grid.component.css']
})
export class CoreGrid implements OnInit {
    @Input() rowCount:any;

  constructor() { }
  clickHandle = (row:number, col:number) => {
alert(`You have clicked Row${row + 1} Col${col +1 }`)
  }

   getRandomArbitrary = (min:number, max:number) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));
  }

  colors: Array<string>=['#ffd460','#f07b3f', '#ea5455', '#2d4059','#1b1717','#630000','#eeebdd','#ccffbd'];

  randomColors: Array<string> = this.colors.map(()=>this.colors[this.getRandomArbitrary(0,7)]);

  ngOnInit(): void {
  }

}
