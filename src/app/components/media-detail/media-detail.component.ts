import { Component, OnInit, Input } from '@angular/core';
import { MediaDetailDto } from 'src/app/shared-data/media-detail-dto';
import { ActivatedRoute } from '@angular/router';
import { MediaDetailService } from 'src/app/services/media-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './media-detail.component.html'
})
export class MediaDetailComponent implements OnInit {
  @Input() mediaDetail: MediaDetailDto;


  constructor(private route: ActivatedRoute, private mediaDetailService: MediaDetailService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('mediaId');
    this.mediaDetailService.getMediaDetailById(id)
      .subscribe(data => this.mediaDetail = data);

  }

}

