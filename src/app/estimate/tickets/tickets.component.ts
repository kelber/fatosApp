import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  @Input() mesmoValorAserPassadoAcimaSubject: BehaviorSubject<any>;
  nomeRecebidoSubscription: Subscription;
  nomeCount = 0;

  musicaSubscription: Subscription;
  musicaCount = 0;



  constructor(private appService: AppService) { }

  ngOnInit() {
    this.nomeRecebidoSubscription = this.mesmoValorAserPassadoAcimaSubject.subscribe(valor => {
      this.nomeCount++;
    });
  
    this.musicaSubscription = this.appService.obterMusica()
      .subscribe(valor => {
        this.musicaCount++;
      });
  }

  ngOnDestroy() {
    if (this.musicaSubscription)
      this.musicaSubscription.unsubscribe();

    if (this.nomeRecebidoSubscription)
      this.nomeRecebidoSubscription.unsubscribe();
  }

  get musica(): string {
    return this.appService.obterMusica().value;
  }
}