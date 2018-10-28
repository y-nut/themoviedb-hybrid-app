import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '../../services/i18n/i18n.module';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  I18nModule
];

@NgModule({
  imports:modules,
  exports: modules
})
export class SharedModulesModule { }
