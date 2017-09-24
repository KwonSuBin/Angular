import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestTopnavComponent } from './test-topnav/test-topnav.component';
import { Test1Component } from './test-topnav/test1/test1.component';
import { Test2Component } from './test-topnav/test2/test2.component';
import { Test3Component } from './test-topnav/test3/test3.component';


const routes: Routes = [
 //TEST PAGE 경로
  { path: 'test', component: TestComponent},
  { path: 'test-topnav', component: TestTopnavComponent},
  { path: 'test1', component: Test1Component},
  { path: 'test2', component: Test2Component},
  { path: 'test3', component: Test3Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
