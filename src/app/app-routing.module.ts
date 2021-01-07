import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TamplateComponent } from './pages/tamplate/tamplate.component';

const routes: Routes = [
  {path: 'template' , component: TamplateComponent},
  {path: 'reactivo', component: ReactiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'reactivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
