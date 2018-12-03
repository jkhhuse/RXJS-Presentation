import {Component, OnDestroy, OnInit} from '@angular/core';
import { combineLatest, of} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs/internal/Subscription';
import {interval} from 'rxjs/internal/observable/interval';
import {merge, Observable} from 'rxjs';

@Component({
  selector: 'app-crp',
  templateUrl: './crp.component.html',
  styleUrls: ['./crp.component.css']
})
export class CrpComponent implements OnInit, OnDestroy {
  valueA$: any;
  valueB$: any;
  valueC$: any;
  valueD$: any;
  subscription1: Subscription;
  subscription2: Subscription;
  streamA$: Observable<any>;
  streamB$: Observable<any>;
  streamC$: any;
  constructor() { }

  ngOnInit() {
    this.valueA$ = of(3, 4, 5);
    this.valueB$ = this.valueA$.pipe(
      map( (a: number) => 10 * a)
    );
    this.subscription1 = this.valueB$.subscribe(b => {
      console.log('the value of b is' + b);
    });
    this.valueC$ = interval(2000).pipe(take(10));
    this.valueD$ = this.valueC$.pipe(
      map((a: number) => 10 * a)
    );
  }
  triggerSum() {
    this.streamA$ = interval(100).pipe(take(3));
    this.streamB$ = interval(100).pipe(take(3));
    this.streamC$ = combineLatest(this.streamA$, this.streamB$).pipe(
      tap(numbers =>  console.log(numbers)),
      map(numbers => numbers.reduce((sum, n) => sum + n, 0))
    )
    this.subscription2 = this.streamC$.subscribe(val => {
      console.log('数据值和为: ' + val);
    });
  }
  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
