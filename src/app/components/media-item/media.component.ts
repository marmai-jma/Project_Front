import { Component, OnInit, Input } from '@angular/core';
import { MediaDto } from 'src/app/shared-data/media-dto';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit {

  @Input() mediaItem: MediaDto;

  constructor() { }

  ngOnInit() {

  }

}