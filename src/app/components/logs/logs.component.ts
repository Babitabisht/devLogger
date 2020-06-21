import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: Log[];
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe((logs) => {
      this.logs = logs;
    });
  }

  onSelect(log: Log) {
    console.log('log', log);
    this.logService.setFormLog(log);
  }

  onDelete(log:Log){
    this.logService.deleteLog(log);

  }
}
