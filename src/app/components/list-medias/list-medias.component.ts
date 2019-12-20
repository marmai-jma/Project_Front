import { Component, OnInit } from '@angular/core';
import { MediaDto } from 'src/app/shared-data/media-dto';

@Component({
  selector: 'app-list-medias',
  templateUrl: './list-medias.component.html',
  styleUrls: ['./list-medias.component.scss']
})
export class ListMediasComponent implements OnInit {
  mediaListe: MediaDto[];

  constructor() { }

  ngOnInit() {
  }

}
