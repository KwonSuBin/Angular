import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestTopnavComponent } from './test-topnav/test-topnav.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardDataComponent } from './card-data/card-data.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestTopnavComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    HomeComponent,
    CardComponent,
    CardDataComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
