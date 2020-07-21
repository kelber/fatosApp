import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {
  @Input() valorAserPassadoSubject: BehaviorSubject<string>;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  enviarViaInput(nome: string) {
    this.valorAserPassadoSubject.next(nome);
  }

  enviarViaService(musica: string) {
    this.appService.alterarMusica(musica);
  }
}