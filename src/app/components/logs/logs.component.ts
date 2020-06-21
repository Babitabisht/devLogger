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
  msg:boolean=false;
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    console.log('-----------on init', this.logs);
    
    this.logService.getLogs().subscribe((logs) => {
      this.logs = logs;
      
    });
    console.log('--len--', this.msg);

    this.logs.length == 0 || this.logs == null || this.logs == undefined
      ? (this.msg = true)
      : (this.msg = false); 

      console.log('msg');
      
  }

  onSelect(log: Log) {
    console.log('log', log);
    this.logService.setFormLog(log);
  }

  onDelete(log:Log){
    if(confirm('Are you sure, you want to delete?')){
      this.logService.deleteLog(log);
    }

  }


  
}
