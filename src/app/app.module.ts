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
import { LikeComponent } from './components/like/like.component';
import { PersonalReviewComponent } from './components/personal-review/personal-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewComponent } from './components/review/review.component';
import { UsefulComponent } from './components/useful/useful.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    LikeComponent,
    PersonalReviewComponent,
    ReviewListComponent,
    ReviewComponent,
    UsefulComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: 'BACKEND_URL', useValue: 'http://localhost:8080' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
