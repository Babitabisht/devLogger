import { Injectable } from '@angular/core';
import { Log } from '../models/log';
// import { BehaviourSubject } from 'rxjs';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });

  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((item, index) => {
      if (item.id == log.id) {
        this.logs.splice(index, 1);
        this.logs.unshift(log);
      }
    });
  }

  deleteLog(log: Log) {
    this.logs.forEach((item, index) => {
      if (item.id == log.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
