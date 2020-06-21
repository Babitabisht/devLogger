import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[];
  constructor() {}

  ngOnInit(): void {
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
}
