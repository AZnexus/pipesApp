import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Alex';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'amigo',
    female: 'amiga'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Marta', 'Pedro', 'Juan', 'Alberto', 'Luis', 'Alejandro'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos 1 cliente',
    'other': 'tenemos # clientes'
  }

  deleteClient(): void {
    this.clients.shift(); // Elimina el primer elemento de la lista.
  }

  // KeyValue Pipe / Json
  public person = {
    name: 'Alex',
    age: 30,
    city: 'New York, USA'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
