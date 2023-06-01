import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cadastro } from '../models/cadastro.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly key = 'userData';

  constructor() { }

  public save(userData: any): Observable<any> {
    const data = localStorage.getItem(this.key);
    if (!!data) {
        let dataAll: Cadastro[] = JSON.parse(data);
        dataAll.push(userData);
        let userDataStr = JSON.stringify(dataAll);
        localStorage.setItem(this.key, userDataStr);
    } else {
        let array = [];
        let obj = new Cadastro();
        obj.horario = userData.horario;
        obj.arquivo = userData.arquivo;
        array.push(userData);
        let objStr = JSON.stringify(array);
        localStorage.setItem(this.key, objStr);
    }
    return of(true);
  }

  public getCadastro(): Cadastro[] {
    return JSON.parse(localStorage.getItem(this.key));
  }
}