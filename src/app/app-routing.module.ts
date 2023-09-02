import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent }      from './layout';
import { TaskComponent }        from './views/task';
import { AboutComponent }       from './views/about';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'about', component: AboutComponent },
      { path: 'task', component: TaskComponent }
    ]
  },
  { path: '**', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
