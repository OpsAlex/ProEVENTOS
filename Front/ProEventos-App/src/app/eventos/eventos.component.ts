import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [
    {
    Tema: 'Angular',
    Local: 'São Paulo'
    },
    {
      Tema: '.NET 5',
      Local: 'São Paulo'
    },
    {
      Tema: 'Angular e Suas Novidades',
      Local: 'Rio de Janeiro'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
