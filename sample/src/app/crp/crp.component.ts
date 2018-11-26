import {Component, OnDestroy, OnInit} from '@angular/core';
import {of} from 'rxjs/internal/observable/of';
import {map, take} from 'rxjs/operators';
import {Subscription} from 'rxjs/internal/Subscription';
import {interval} from 'rxjs/internal/observable/interval';

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
  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
