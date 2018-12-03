import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject, from, interval, Observable, ReplaySubject, Subscription} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, filter, reduce, takeLast, throttleTime} from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-eze',
  templateUrl: './eze.component.html',
  styleUrls: ['./eze.component.css']
})
export class EzeComponent implements OnInit {
  time: any;
  timeA$: Observable<any>;
  timeB$: Observable<any>;
  timeC$: Observable<any>;
  timeD$: Observable<any>;

  info$: Observable<any>;
  human$: Observable<any>;
  fish$: Observable<any>;
  subscriptionA: Subscription;
  subscriptionB: Subscription;

  queryField: FormControl = new FormControl();
  displayValue$: Observable<any>
  constructor() {
  }

  ngOnInit() {
    const createAt = new Date();
    interval(1000).subscribe(() => {
        this.time = moment(createAt).fromNow();
      }
    );
    this.timeA$ = interval(1000);
    this.timeB$ = this.timeA$.pipe(
      filter(num => {
        return (num % 2 !== 0)
          && (num % 3 !== 0)
          && (num % 5 !== 0)
          && (num % 7 !== 0);
      })
    );
    this.timeC$ = this.timeB$.pipe(debounceTime(3000));
    this.timeD$ = this.timeC$.pipe(delay(2000));
    const info = '我是一个人不是一条鱼'
    this.info$ = from(info.split(''));
    this.human$ = this.info$.pipe(reduce((acc, curr) => {
      return acc + '' + curr;
    }))
    this.fish$ = this.info$.pipe(takeLast(3), reduce((acc, curr) => {
      return acc + '' + curr;
    }));
    this.displayValue$ = this.queryField.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter(s => {
        return s.length > 0;
      })
    );
  }

}
