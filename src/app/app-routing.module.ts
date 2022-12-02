import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ViewComponent } from './home/components/view/view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view/:id', component: ViewComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
