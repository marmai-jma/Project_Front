import { Component, OnInit, Input } from '@angular/core';
import { ReviewDto } from 'src/app/shared-data/review-dto';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  @Input() mediaId: string;
  @Input() reviews: ReviewDto[];
  constructor() { }

  ngOnInit() {
    console.log(this.reviews[0].comment)
  }

}
