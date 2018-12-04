import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrpComponent } from './crp/crp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WirComponent } from './wir/wir.component';
import { DbcComponent } from './dbc/dbc.component';
import { DoubleClickDirective } from './util/double-click.directive';
import { HelloComponent } from './hello/hello.component';
import { EzeComponent } from './eze/eze.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { BeforeComponent } from './before/before.component';
import { IntroToRxComponent } from './intro-to-rx/intro-to-rx.component';
import { FunctionalProgrammingComponent } from './functional-programming/functional-programming.component';
import { ReactiveProgrammingComponent } from './reactive-programming/reactive-programming.component';
import { FunctionalProgrammingTrainingComponent } from './functional-programming-training/functional-programming-training.component';
@NgModule({
  declarations: [
    AppComponent,
    CrpComponent,
    WirComponent,
    DbcComponent,
    DoubleClickDirective,
    HelloComponent,
    EzeComponent,
    ConclusionComponent,
    BeforeComponent,
    IntroToRxComponent,
    FunctionalProgrammingComponent,
    ReactiveProgrammingComponent,
    FunctionalProgrammingTrainingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
