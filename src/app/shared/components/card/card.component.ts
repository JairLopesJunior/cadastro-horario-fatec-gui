import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() horario: string = '';

  @Input() arquivo: string = '';

  currentTime: string;

  isBordered: boolean = false;

  frase: string = 'Horário agendado:';

  constructor() { }

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  playSound(): void {
    this.isBordered = true;
    let audioFile: string = `assets/${this.arquivo}`;
    const audio = new Audio(audioFile);
    audio.play();
    setTimeout(() => {
      audio.pause();
      this.isBordered = false;
    }, 4000);
  }

  updateTime(): void {
    const date = new Date();
    const hours = this.addLeadingZero(date.getHours());
    const minutes = this.addLeadingZero(date.getMinutes());
    const seconds = this.addLeadingZero(date.getSeconds());

    this.currentTime = `${hours}:${minutes}:${seconds}`;

    if (this.horario === `${hours}:${minutes}`) {
      this.isBordered = true;
      let audioFile: string = `assets/${this.arquivo}`;
      const audio = new Audio(audioFile);
      audio.play();
      this.frase = undefined;
      this.horario = `Horário agendado: ${this.horario}`;
      setTimeout(() => {
        audio.pause();
        this.isBordered = false;
      }, 4000);
    }
  }

  addLeadingZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}