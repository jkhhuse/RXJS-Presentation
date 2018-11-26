import {Component, ElementRef, AfterViewInit} from '@angular/core';

import {buffer, filter, map, throttle, throttleTime} from 'rxjs/operators';
import {Subscription} from 'rxjs/internal/Subscription';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {interval} from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // button: any;
  // label: any;
  // clickStream: any;
  // doubleClickStream: any;
  // subscription1: Subscription;
  // subscription2: Subscription;

  // ngAfterViewInit() {
  // this.button = document.querySelector('button');
  // this.label = document.querySelector('h4');
  // this.clickStream = fromEvent(this.button, 'click');
  // this.doubleClickStream = this.clickStream.pipe(
  //   buffer(this.clickStream.pipe(throttleTime(250)
  //   )),
  //   map(arr => (arr as Array<any>).length),
  //   filter(length => length === 2)
  // );
  // this.subscription1 = this.doubleClickStream.subscribe(event => {
  //   console.log('subscription1 triggered');
  //   this.label.textContent = 'double clicked';
  // });
  // this.subscription2 = this.doubleClickStream.pipe(
  //   throttleTime(1000)
  // ).subscribe(suggestion => {
  //   console.log('subscription2 triggered');
  //   this.label.textContent = '---';
  // });
  // }
}
