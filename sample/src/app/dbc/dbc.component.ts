import { Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {buffer, filter, map, throttle, throttleTime} from 'rxjs/operators';

import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-dbc',
  templateUrl: './dbc.component.html',
  styleUrls: ['./dbc.component.css']
})
export class DbcComponent implements OnInit, on {
  button: any;
  label: any;
  clickStream$: any;
  doubleClickStream$: any;
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.button = document.querySelector('.button');
    this.label = document.querySelector('span');
    this.clickStream$ = fromEvent(this.button, 'click');
    const temp$ = this.clickStream$.pipe(
      throttleTime(250)
    )
    this.doubleClickStream$ = this.clickStream$.pipe(
      buffer(temp$),
      map((arr: Array<any>) => arr.length),
      filter(length => length === 2)
    );
    this.subscription = this.doubleClickStream$.subscribe(event => {
      this.label.textContent = 'double clicked';
    });
  }
}
