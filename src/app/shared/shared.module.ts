import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GifftAppInputComponent } from './gifftApp-input/gifftApp-input.component';
import { GiftAppErrorsComponent } from './giftApp-errors/giftApp-errors.component';

@NgModule({
  declarations: [GiftAppErrorsComponent, GifftAppInputComponent],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [GiftAppErrorsComponent, GifftAppInputComponent],
  providers: [],
})
export class SharedModule {}
