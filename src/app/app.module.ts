import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreLibModule } from 'core-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
