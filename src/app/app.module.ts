import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MediaComponent } from './components/media-item/media.component';
import { MediaFormComponent } from './components/media-form/media-form.component';
import { ListMediasComponent } from './components/list-medias/list-medias.component';
import { MediaNavComponent } from './components/media-nav/media-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaFormComponent,
    ListMediasComponent,
    MediaNavComponent,
    FooterComponent,
    MediaDetailComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'BACKEND_URL', useValue: 'http://localhost:8080' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
