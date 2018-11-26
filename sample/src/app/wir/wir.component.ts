import {Component, OnInit} from '@angular/core';
import {map, take} from 'rxjs/operators';
import {interval} from 'rxjs/internal/observable/interval';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-wir',
  templateUrl: './wir.component.html',
  styleUrls: ['./wir.component.css']
})
export class WirComponent implements OnInit {
  source: any;
  result: any;
  source$: any;
  result$: any;
  subscription: Subscription;
  constructor() {
  }

  ngOnInit() {
    this.source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

    this.result = this.source;
    console.log('Array result is ' + this.result);
    this.source$ = interval(400).pipe(
      take(9),
      map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]));
    this.result$ = this.source$;
    this.subscription = this.result$.subscribe(x => {
      console.log(x);
    });
  }

}
