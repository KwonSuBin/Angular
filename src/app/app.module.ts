import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestTopnavComponent } from './test-topnav/test-topnav.component';
import { Test1Component } from './test-topnav/test1/test1.component';
import { Test2Component } from './test-topnav/test2/test2.component';
import { Test3Component } from './test-topnav/test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestTopnavComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
