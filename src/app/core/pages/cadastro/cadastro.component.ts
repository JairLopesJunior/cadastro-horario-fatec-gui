import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { fromEvent } from 'rxjs';
import { throttleTime, take, debounceTime } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: FormGroup;

  previousAudio: any = new Audio();

  private readonly _notifierService: NotifierService;

  constructor(private fb: FormBuilder,
              private localStorage: LocalStorageService,
              private notifierService: NotifierService) 
  {
    this._notifierService = notifierService;
  }

  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.cadastro = this.fb.group({
      horario: [''],
      arquivo: []
    });
  }

  onSubmit(): void {
    if(this.cadastro.valid) {
      this.localStorage.save(this.cadastro.getRawValue())
      .subscribe(() => {
        this._notifierService.notify('success', 'Agendamento cadastrado com sucesso.');
      });
    }
  }

  playSound(evt: any): void {
    if (this.previousAudio) {
      this.previousAudio.pause();
    }
    let audioFile: string = `assets/${evt.target.value}`;
    const audio = new Audio(audioFile);
    this.previousAudio = audio;
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 10000);
  }
}
