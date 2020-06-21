import { Injectable } from '@angular/core';
import { Log } from '../models/log';


@Injectable({
  providedIn: 'root'
})
export class LogService {
logs:Log[];
  constructor() {
    this.logs = [
      { id: '1', text: 'generated components', date: new Date('12/26/2017') },
      {
        id: '2',
        text: 'generated components 2',
        date: new Date('12/26/2018'),
      },
      {
        id: '3',
        text: 'generated components 3',
        date: new Date('12/26/2019'),
      },
    ];
   }


   getLogs(){
     return this.logs;
   }

  

}
