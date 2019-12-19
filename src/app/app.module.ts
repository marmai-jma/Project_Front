import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaComponent } from './components/media/media.component';
import { MediaFormComponent } from './components/media-form/media-form.component';
import { ListMediasComponent } from './components/list-medias/list-medias.component';
import { MediaNavComponent } from './components/media-nav/media-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaFormComponent,
    ListMediasComponent,
    MediaNavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
