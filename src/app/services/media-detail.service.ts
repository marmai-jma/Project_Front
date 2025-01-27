import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaDetailDto } from '../shared-data/media-detail-dto';
import { map } from 'rxjs/operators';
import { ReviewDto } from '../shared-data/review-dto';
import { MediaNotationLightDto } from '../shared-data/media-notation-light-dto';

@Injectable({
  providedIn: 'root'
})
export class MediaDetailService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private url: string) {}

  getMediaDetailById(mediaId: string): Observable<MediaDetailDto> {
    return this.http.get(`${this.url}/medias/${mediaId}`)
      .pipe(
        map((result: any) => new MediaDetailDto(result)),
      );
    }

  postReviewBymediaIdUserLogin(mediaId: string, userLogin: string, comment: string ): Observable<any> {
    return this.http.post(`${this.url}/medias/${mediaId}/review/${userLogin}`, {'comment': comment} )
    .pipe(
      map((result: any) => new MediaDetailDto(result)),
    );
  }

  deleteReviewById(reviewId: number): Observable<any> {
    return this.http.delete(`${this.url}/reviews/${reviewId}`);
  }

  deleteReviewBymediaIdUserLogin(mediaId: string, userLogin: string): Observable<any> {
    return this.http.delete(`${this.url}/medias/${mediaId}/review/${userLogin}`);
  }

  getReviewsByMedia(mediaId: string): Observable<ReviewDto[]> {
    return this.http.get(`${this.url}/medias/${mediaId}/reviews`)
    .pipe(
      map((jsonMedias: any[]) => jsonMedias.map(jsonMedia => new ReviewDto(jsonMedia)))
      );
  }

  getReviewBymediaIdUserLogin(mediaId: string, userLogin: string): Observable<ReviewDto> {
    return this.http.get(`${this.url}/medias/${mediaId}/review/${userLogin}`)
      .pipe(
        map((result: any) => new ReviewDto(result)),
      );
    }

  getMediaNotationBymediaIdUserLogin(mediaId: string, userLogin: string ): Observable<MediaNotationLightDto> {
    return this.http.get(`${this.url}/medias/${mediaId}/notation/${userLogin}`)
    .pipe(
      map((result: any) => new MediaNotationLightDto(result)),
    );
  }

  postNotationBymediaIdUserLogin(mediaId: string, userLogin: string, like: boolean ) : Observable<any> {
    console.log("url : " + this.url + ", media id :" + mediaId + ", userLogin: " + userLogin + ", like : " + like)
    return this.http.post<any>(`${this.url}/medias/${mediaId}/notation/${userLogin}`, {'liked': like});
  }

}
