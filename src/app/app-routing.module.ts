import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMediasComponent } from './components/list-medias/list-medias.component';
import { DetailComponent } from './components/detail/detail.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
  { path: 'liste', component: ListMediasComponent },
  { path: 'media/:mediaId', component: DetailComponent },
  { path: 'user/:userLogin', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
