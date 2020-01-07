import { Component, OnInit } from '@angular/core';
import { MediaDto, MediaCategory } from 'src/app/shared-data/media-dto';
import { MediasService } from 'src/app/services/medias.service';

@Component({
  selector: 'app-list-medias',
  templateUrl: './list-medias.component.html'
})
export class ListMediasComponent implements OnInit {
  mediaList: MediaDto[];
  //category: string = 'MUSIQUE';

  movies: MediaDto[];
  musics: MediaDto[];
  games: MediaDto[];
  books: MediaDto[];

  constructor(private mediaService: MediasService) { }

  ngOnInit() {
    // this.mediaService.getMedias().subscribe(data => { this.mediaList = data; });
    // this.mediaService.getMediaByCategory(this.category).subscribe(data => { this.mediaList = data; });

    this.mediaService.getMedias()
      .subscribe(data => {
        this.mediaList = data;
        this.movies = this.mediaList.filter(m => m.category === MediaCategory.FILM);
        this.musics = this.mediaList.filter(m => m.category === MediaCategory.MUSIQUE);
        this.games = this.mediaList.filter(m => m.category === MediaCategory.JEU);
        this.books = this.mediaList.filter(m => m.category === MediaCategory.LIVRE);
      });

  }

}
