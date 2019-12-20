import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaDto } from '../shared-data/media-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private http: HttpClient) { }

  // Obs à cause de la requête HTTP
  /*
  getMedias(): Observable<MediaDto[]> {
    return this.http.get(`${this.url}/products`)
    .pipe(
      map((jsonMedias: any[]) => {
        return jsonMedias.map(jsonMedia => new MediaDto(jsonMedia));
      })
      );
    }
    */

    /*
    getMedia(mediaId: any): Observable<MediaDto> {

      return this.http.get(`${this.url}/products/${mediaId}`)
      .pipe(map(jsonMedia => new MediaDto(jsonMedia)));
    }
    */

    // delete a faire

  }
