import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RecoDto } from '../shared-data/reco-dto';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecosService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private url: string) { }


  //
  getRecos(): Observable<RecoDto[]> {
    return this.http.get(`${this.url}/recommendations`)
      .pipe(
        map((jsonRecos: any[]) => jsonRecos.map(jsonReco => new RecoDto(jsonReco)))
      );
  }
}
