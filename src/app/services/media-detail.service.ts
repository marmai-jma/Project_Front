import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaDetailDto } from '../shared-data/media-detail-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaDetailService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private baseUrl: string) {}

  getMediaDetailById(mediaId: string): Observable<MediaDetailDto> {
                return this.http.get(`${this.baseUrl}/medias/${mediaId}`)
                .pipe(
                  map((result: any) => new MediaDetailDto(result)),
                );
              }
}
