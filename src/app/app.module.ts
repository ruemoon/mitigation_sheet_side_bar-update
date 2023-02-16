import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { JobStore } from './store/job.store';
import { SelectJobComponent } from './component/select-job/select-job.component';
import { GasStore } from './store/gas.store';
import { HideAaComponent } from './component/hide-aa/hide-aa.component';

@NgModule({
  declarations: [AppComponent, SelectJobComponent, HideAaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    PanelModule,
    DividerModule,
    ButtonModule,
    RippleModule,
    CheckboxModule,
    FormsModule,
  ],
  providers: [JobStore, GasStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
