import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Objt {
  id: number;
  text: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor() { }

  ngOnInit(): void {
    
  }


 


}
