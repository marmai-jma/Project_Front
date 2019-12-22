import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MediaComponent } from './components/media-item/media.component';
import { MediaFormComponent } from './components/media-form/media-form.component';
import { ListMediasComponent } from './components/list-medias/list-medias.component';
import { MediaNavComponent } from './components/media-nav/media-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
  { path: 'liste', component: ListMediasComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaFormComponent,
    ListMediasComponent,
    MediaNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: 'BACKEND_URL', useValue: 'http://localhost:3004' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
