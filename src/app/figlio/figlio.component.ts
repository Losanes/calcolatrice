import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {
  @Input() ris:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
