import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
istext:boolean=false;
 id: string;
 text:string;
 date:any;


  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.selectedLog.subscribe(log=>{
      console.log('--log--',log);
      if(log.id !== null ){
        this.id = log.id;
        this.text = log.text;
        this.date= log.date;
      }
    })
  }
}
