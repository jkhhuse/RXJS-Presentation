import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrpComponent } from './crp/crp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import { WirComponent } from './wir/wir.component';
import { DbcComponent } from './dbc/dbc.component';
@NgModule({
  declarations: [
    AppComponent,
    CrpComponent,
    WirComponent,
    DbcComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
