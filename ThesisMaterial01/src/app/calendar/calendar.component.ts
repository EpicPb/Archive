import { Component, OnInit } from '@angular/core';
// import {CalendarModule} from "ap-angular2-fullcalendar";
// import {CalendarComponent} from "ap-angular2-fullcalendar";
// import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
 //  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
 //
 // changeCalendarView(view) {
 //   this.myCalendar.fullCalendar('changeView', view);
 // }

  months = [
          {month: 'January'},
          {month: 'February'},
          {month: 'March'},
          {month: 'April'},
          {month: 'May'},
          {month: 'June'},
          {month: 'July'},
          {month: 'August'},
          {month: 'September'},
          {month: 'October'},
          {month: 'November'},
          {month: 'December'}
        ];
days = [
        {day: 'Sn'},
        {day: 'M'},
        {day: 'T'},
        {day: 'W'},
        {day: 'Th'},
        {day: 'F'},
        {day: 'S'}
      ];
i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,4,25,26,27,28,29,30,31];

  today = Date.now();
calendarOptions:Object = {
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: '2016-09-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ]
    };

    onCalendarInit(initialized: boolean) {
      console.log('Calendar initialized');
    }
  constructor() {

  }
  ngOnInit() {

  }

}
