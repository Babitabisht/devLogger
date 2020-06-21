import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  istext: boolean = false;
  id: string;
  text: string;
  date: any;
  isNew: boolean=true;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.selectedLog.subscribe((log) => {
      console.log('--log--', log);
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        this.isNew = false;
      }
    });
  }

  onSubmit() {
    console.log('---on submit---');

    if (this.isNew) {
      console.log('---in--');

      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date(),
      };

      this.logService.addLog(newLog);
    } else {
      console.log('else');

      const updateLog = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };
      this.logService.updateLog(updateLog);
    }
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
