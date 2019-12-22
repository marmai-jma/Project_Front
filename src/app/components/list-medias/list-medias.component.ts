import { Component, OnInit } from '@angular/core';
import { MediaDto } from 'src/app/shared-data/media-dto';
import { MediasService } from 'src/app/services/medias.service';

@Component({
  selector: 'app-list-medias',
  templateUrl: './list-medias.component.html',
  styleUrls: ['./list-medias.component.scss']
})
export class ListMediasComponent implements OnInit {
  mediaListe: MediaDto[];

  constructor(private mediaService: MediasService) { }

  ngOnInit() {
    this.mediaService.getMedias()
    .subscribe(data => {
      this.mediaListe = data;
    });
  }

}
