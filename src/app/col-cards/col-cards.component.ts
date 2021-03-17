import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'col-cards',
  templateUrl: './col-cards.component.html',
  styleUrls: ['./col-cards.component.css']
})
export class ColCardsComponent implements OnInit {

  @Input() iconSrc:string = '';
  @Input() text:string = '';
  @Input() routerLink: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
