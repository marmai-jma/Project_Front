import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMediasComponent } from './components/list-medias/list-medias.component';


const routes: Routes = [
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
  { path: 'liste', component: ListMediasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
