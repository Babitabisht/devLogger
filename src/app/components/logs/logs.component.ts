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

    this.logs=this.logService.getLogs();

  }
}