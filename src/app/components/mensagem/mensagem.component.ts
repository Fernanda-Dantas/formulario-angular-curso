import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  standalone: true,
  imports: [],
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {
  @Input() mensagem = '';
  constructor() {

  }

}
