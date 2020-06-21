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
    
  }

  getLogs(): Observable<Log[]> {
     this.logs = JSON.parse(localStorage.getItem('logs'));
      
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
     let logsFromLocalStorage = JSON.parse(localStorage.getItem('logs'));
    if (
      localStorage.getItem('logs') === null ||
      localStorage.getItem('logs') === undefined ||
      logsFromLocalStorage.length==0
    ) {
      let logArray = new Array();
      logArray.unshift(log);
      localStorage.setItem('logs', JSON.stringify(logArray));
    } else {
      logsFromLocalStorage.unshift(log);
      localStorage.setItem('logs', JSON.stringify(logsFromLocalStorage));
    }

 
 
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
