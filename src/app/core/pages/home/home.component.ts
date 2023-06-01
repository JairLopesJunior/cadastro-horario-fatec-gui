import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Cadastro } from 'src/app/models/cadastro.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itens: Cadastro[] = [];

  private readonly _notifierService: NotifierService;

  constructor(private localStorage: LocalStorageService,
              private notifierService: NotifierService) 
  {
    this._notifierService = notifierService;
  }

  ngOnInit(): void {
    this.itens = this.localStorage.getCadastro();
    this._notifierService.notify('success', 'Dados carregados com sucesso.');
  }
}
