import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, BlockUIModule, ProgressSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
