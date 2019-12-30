import { Component, OnInit, Input } from '@angular/core';
import { ReviewDto } from 'src/app/shared-data/review-dto';
import { MediaDetailService } from 'src/app/services/media-detail.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  @Input() mediaId: string;
  reviewListe: ReviewDto[] =[];

  constructor(private mediaDetailService: MediaDetailService) { }

  ngOnInit() {
    this.mediaDetailService.getReviewsByMedia(this.mediaId)
    .subscribe(data => {
      this.reviewListe = data;
    });
    console.log(this.mediaId);

  }

}
