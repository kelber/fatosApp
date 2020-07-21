import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valorAPassar= new BehaviorSubject<any>('valor Fixo');

}
