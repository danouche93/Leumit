import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLeumitComponent } from './components/test-leumit/test-leumit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test-leumit'
  },
  {
    path: 'test-leumit',
    component: TestLeumitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
