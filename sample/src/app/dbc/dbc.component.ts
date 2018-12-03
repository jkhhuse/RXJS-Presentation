import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {buffer, debounce, debounceTime, filter, map, throttle, throttleTime, bufferCount, first, repeat} from 'rxjs/operators';

import {Subscription} from 'rxjs/internal/Subscription';
import {race} from "rxjs";

@Component({
  selector: 'app-dbc',
  templateUrl: './dbc.component.html',
  styleUrls: ['./dbc.component.css']
})
export class DbcComponent implements OnInit, AfterViewInit {
  doubleClickDuration = 250;
  @ViewChild('button', {read: ElementRef})
  button: ElementRef;
  leftClick$: any;
  label: string;
  constructor() { }

  ngOnInit() {
    this.label = 'no click';
  }

  ngAfterViewInit() {
  }
  clickEvent() {
    this.leftClick$ = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        filter((event: any) => event.button === 0)
      );
    const debounce$ = this.leftClick$
      .pipe(debounceTime(this.doubleClickDuration));
    const clickLimit$ = this.leftClick$
      .pipe(
        bufferCount(2),
      );
    const bufferGate$ = race(debounce$, clickLimit$).pipe(
      first(),
      repeat(),
    )
    this.leftClick$.pipe(
      buffer(bufferGate$),
      // Here we map the buffered events into the length of the buffer
      // If the user clicked once, the buffer is 1. If he clicked twice it is 2
      map((clicks: any) => clicks.length),
      filter(length =>  length === 2)
    ).subscribe(clicks => {
      console.log('double clicked');
      this.label = 'double clicked';
    });
  }
}
