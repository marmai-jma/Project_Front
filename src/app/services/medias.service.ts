import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaDto } from '../shared-data/media-dto';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private url: string) {
    }

    // Obs à cause de la requête HTTP
    getMedias(): Observable<MediaDto[]> {
      return this.http.get(`${this.url}/medias`)
      .pipe(
        map((jsonMedias: any[]) => jsonMedias.map(jsonMedia => new MediaDto(jsonMedia)))
        );
    }

    // par Id
    getMedia(mediaId: any): Observable<MediaDto> {
      return this.http.get(`${this.url}/medias/${mediaId}`)
      .pipe(
        map(jsonMedia => new MediaDto(jsonMedia)));
    }


      // delete a faire uniquement pour l'admin USER

    }
